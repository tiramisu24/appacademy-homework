
class Person <  ActiveRecord::Base

  belongs_to :house,
    primary_key: :house_id,
    foreign_key: :id,
    class_name: 'House'

end
