module ComponentHelper
  def component(name, props)
    id = "component-#{SecureRandom.uuid}"
    data_id = "data-#{SecureRandom.uuid}"
    json = JSON.generate(props)

    html = %{
      <div id="#{ id }"></div>
      <script type="application/json" id="#{data_id}">
        #{json}
      </script>
      <script>
        (function() {
          var target = document.getElementById('#{id}');
          var dataContainer = document.getElementById('#{data_id}');
          var props = JSON.parse(dataContainer.innerHTML);

          renderComponent('#{name}', target, props);
        })();
      </script>
    }

    html.html_safe
  end
end
