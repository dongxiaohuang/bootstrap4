<script>
     $(document).ready(()=>{
          // Attribute Equals Selector [name=”value”]
          $('[data-toggle="tooltip"]').tooltip();
          $('#mycarousel').carousel({
               interval: 2000
          });
          $("#carouselBtn").click(()=>{
               if($('#carouselBtn').children('span').hasClass('fa-pause')){
                    $('#mycarousel').carousel('pause');
                    $('#carouselBtn').children('span').removeClass('fa-pause');
                    $('#carouselBtn').children('span').addClass('fa-play');
               }
               else{
                    $('#carouselBtn').children('span').removeClass('fa-play');
                    $('#carouselBtn').children('span').addClass('fa-pause');
                    $('#mycarousel').carousel('cycle');
               }
          });
     })
</script>
