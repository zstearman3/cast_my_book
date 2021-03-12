# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_03_12_185202) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "actors", force: :cascade do |t|
    t.string "name"
    t.string "imdb_id"
    t.string "picture_url"
    t.string "fame"
    t.string "gender"
    t.string "age_range"
    t.string "skin_color"
    t.string "hair_color"
    t.string "body_type"
    t.text "personality_types", array: true
    t.datetime "created_at", precision: 6
    t.datetime "updated_at", precision: 6
    t.string "search_value"
    t.index ["name"], name: "index_actors_on_name", unique: true
  end

  create_table "books", force: :cascade do |t|
    t.string "title"
    t.string "author"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "search_value"
  end

  create_table "casts", force: :cascade do |t|
    t.bigint "user_id"
    t.bigint "book_id"
    t.datetime "created_at", precision: 6
    t.datetime "updated_at", precision: 6
    t.index ["book_id"], name: "index_casts_on_book_id"
    t.index ["user_id"], name: "index_casts_on_user_id"
  end

  create_table "characters", force: :cascade do |t|
    t.string "name"
    t.string "role"
    t.string "gender"
    t.string "age_range"
    t.string "skin_color"
    t.string "hair_color"
    t.string "body_type"
    t.string "personality_type"
    t.bigint "book_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["book_id"], name: "index_characters_on_book_id"
  end

  create_table "roles", force: :cascade do |t|
    t.bigint "cast_id"
    t.bigint "actor_id"
    t.bigint "character_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["actor_id"], name: "index_roles_on_actor_id"
    t.index ["cast_id"], name: "index_roles_on_cast_id"
    t.index ["character_id"], name: "index_roles_on_character_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

end
