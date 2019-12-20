class CreateSchemas < ActiveRecord::Migration[6.0]
  def change
    create_table :schemas do |t|
      t.string :content
      t.string :hash
      t.references :diagram, null: false, foreign_key: true

      t.timestamps
    end
  end
end
