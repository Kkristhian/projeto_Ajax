$(document).ready(function() {

  var IdAlterar;

  $("#buscarNome").click(function() {
    $.getJSON("http://localhost:41071/pessoa", function(data, status) {
      $("#resultado").html("");
      var items = [];
      $.each(data, function(key, val) {
        items.push("<li class='item-lista' id='" + val.id + "'>" + val.nome + "</li>");
      });

      $("<ul/>", {
        class: "vermelho",
        html: items.join("")
      }).appendTo("#resultado");
    }).then(res => {
      $(".item-lista").click(function() {
        $("#para-deletar").val(this.id);
        $("#para-alterar").val(this.innerHTML);
        IdAlterar = this.id;
      });
    });
  });

  $("#gravarNome").click(function() {
    //enviado
    $.ajax({
      type: "POST",
      url: "http://localhost:41071/pessoa",
      data: '{"nome":"' + $("#nome").val() + '"}',
      success: function(data) {
        //alert("data: " + data);
        $("#nome").val("");
      },
      contentType: "application/json",
      dataType: "json"
    }).then(res => {
      $("#buscarNome").click();
    });
  });

  $("#deletarNome").click(function() {
    $.ajax({
      type: "DELETE",
      url: "http://localhost:41071/pessoa/" + $("#para-deletar").val(),
      success: function(data) { 
        $("#buscarNome").click();
      }
    });
  });

  $("#alterarNome").click(function() {
    $.ajax({
      type: "PATCH",
      url: "http://localhost:41071/pessoa/" + IdAlterar,
      contentType: "application/json",
      data: '{"nome":"' + $("#para-alterar").val() + '"}',
      success: function(data) {
        $("#buscarNome").click();
      }
    });
  });

  
});