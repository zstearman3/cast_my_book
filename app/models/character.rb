class Character < ApplicationRecord
  def self.priority_order
    order(
      Arel.sql(<<-SQL.squish
        CASE
          WHEN role = 'Main Character' THEN '1'
          WHEN role = 'Supporting Character' THEN '2'
          WHEN role = 'Minor Character' THEN '3'
        END
      SQL
    ))
  end
end
