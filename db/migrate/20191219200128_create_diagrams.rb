class CreateDiagrams < ActiveRecord::Migration[6.0]
  def change
    create_table :diagrams do |t|
      t.string :title
      t.string :version

      t.timestamps
    end
  end
end
