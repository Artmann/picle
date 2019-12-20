class Diagram < ApplicationRecord
  def schema
    return %{graph TD
  A[Christmas] -->|Get money| B(Go shopping)
  B --> C{Has enough money}
  C -->|Yes| D[Buy something cool]
  C -->|No| G[Buy materails]
  G --> H[Make something]
  D --> F[Give present]
  H --> F

  } if version.blank?
  end
end
