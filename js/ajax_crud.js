 $(document).ready(function() {
   
    $.ajax({
        'url': "http://localhost:8082/companyList",
        'method': "GET",
        'contentType': 'application/json',
    
    }).done( function(data) {
      var table = $('#table_id').DataTable( {
            colReorder : true,
            pagingType: 'full_numbers',
            "aaData": data,
            "columns": [
                { "data": "id" },
                { "data": "name" }
                         
            ]
            
        })

        $('#table_id tbody').on( 'click', 'tr', function () { 

          var storedData = table.row( this ).data();
          $(".modal-body #name").val(storedData.name);

            //Updating company name
            $(document).delegate('#editSubmit', 'click', function(event) {
       
                event.preventDefault();
                storedData.name = $('#name').val();
              
                $.ajax({
                    type: "POST",
                    contentType: "application/json; charset=utf-8",
                    url: "http://localhost:8082/company/save",
                    data: JSON.stringify({'name': storedData.name}),
                    cache: false,
                    success: function() {
                        alert("Company added successfully");
                        window.setTimeout(function(){location.reload()},1000);
                    }
                    
                });      
            
            });

        } );

        $('#table_id tbody').on('click', 'tr', function(){
            
            var storedData = table.row( this ).data();
            $(".modal-body #nameDelete").val(storedData.name);
           
            //Delete company name

            $(document).delegate('#deleteName', 'click', function(event) {
        
                event.preventDefault();
                $.ajax({
                    type: "DELETE",
                    contentType: "application/json; charset=utf-8",
                    url: "http://localhost:8082/company/delete/" + storedData.id,
                    cache: false,
                    success: function() {
                        alert("Company name deleted successfully");
                            window.setTimeout(function(){location.reload()},1000);
                    }
                    
                });      
            
            });
            
        })

       //Add a new company

        $(document).delegate('#addNew', 'click', function(event) {
            
            event.preventDefault();
            var name = $('#nameSave').val();
            console.log(name);
        
            if(name == null || name == ""){
                alert("Name is required. Please fill the name field");

            }else{
                $.ajax({
                    type: "POST",
                    contentType: "application/json; charset=utf-8",
                    url: "http://localhost:8082/company/save",
                    data: JSON.stringify({'name': name}),
                    cache: false,
                    success: function() {
                        alert("Company added successfully");
                        window.setTimeout(function(){location.reload()},1000);
                    }
                
                });

            }       
        
        });
                
    });

    });  

    

  