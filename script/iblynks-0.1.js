/**
 * Date Modified : 20th Nov 2012
 * Description   : Light Box / Dailog Box
 * version       : 0.1
 * by            : Ibrahim Isa
 * contact       : www.iblynks.com
 */
 
/**
 * Dailog Box Function 
 **/
function iblynks(option)
{
	  
	 /**
          * Required Objects
          **/
          var controls    = {
                              out    : option['out'],
                              width  : option['width'],
                              height : option['height'],
                              not    : option['type'],
                              title  : option['title'],
                              close  : option['close'],
                              error  : option['error']  
                             };         
         /**
          * Declare Required Variables
          **/
          var notice_data = "";	        
          var dir         = currentUrl();
	  var data,showTitle;
          /**
           * Light Box Type
           **/
	  switch(controls.not)
          {
              
                case 'Info'   : 

                   if(controls.title)
                   {
                     showTitle = controls.title;
                   }
                   else{ 

                     showTitle   = 'Information';

                   }
                     notice_data = '<div id="notice"><table><tr><td><div id="img_hold"></div>'+
                                   '</td><td style="padding-left:9px;">'+showTitle+'</td></tr>'+
                                   '</table></div>'; 
                     data        = '<div class="info-warning-div"><center>'+controls.out+'</center></div>';

                break;


                case 'warning':


                   if(controls.title)
                   {
                       showTitle   = controls.title;
                   }
                   else 
                   {
                       showTitle   = 'Warning';
                   }
                       notice_data = '<div id="notice"><table><tr><td><div id="warNing"></div></td>'+
                                     '<td style="padding-left:9px;"><b>'+showTitle+'</b></td></tr></table>'+
                                     '</div>';
                       data        = '<div class="info-warning-div"><center>'+controls.out+'</center></div>';

                break;


                case 'header' :   

                       notice_data = '<div class="ibLynks-general-header">'+controls.title+'</div>';
                       var butt    = (controls.out.button==undefined) ? "" : '<div class="ibLynks-general-buttom">'+controls.out.button+"</div>";
                       data        = '<div class="ibLynks-general-content" ><div class="display-progress-jquery"></div>'
                                     + controls.out.content + butt +'</div>';
                break;


                default       : data = controls.out; 
	  
	  };
	         
	/**
         * Get div width and heigth
         */
	jQuery.fn.center = function () 
        {
              var w = $(window);
	      this.css("position","fixed");
	      this.css("width",controls.width);
	      this.css("height",controls.height);
              this.css("top", Math.max(0, ($(window).height() - this.outerHeight()) / 2) + "px");
              this.css("left", Math.max(0, ($(window).width() - this.outerWidth()) / 2) + "px");
              
           return this;
        };
        /**
         * Change Light Box Background Color
         **/
        var er  = (controls.error==true)? {"background-color":"#000"} : {"background-color":"#FFF"};
          
        $('.ovl').show().css(er);
        /**
         * Remove The close button at the top
         **/  
        if(controls.close)
        { 
              var close = "";
        }else{
              close = "<img src='"+dir+"images/close.png' id='close' title='Close'/>";
        }
        /**
         * Final Output
         **/
        var outp = "<div class='Light-box-msg'></div><div id='hold_close'>"+close+"</div>"+notice_data+"<div> "+data+"</div>";
                  
	$('.ovl_message').html(outp).center().fadeIn(); 
       /**
        * general, Close Div
        */ 	  
	$('#close,.general_close_dailog').click(function(event){$('.ovl,.ovl_message').fadeOut("slow");});
	  
	  
 } 
/**
 * General Close Function 
 **/
 function iblynks_close()
 {
     $('.ovl,.ovl_message').fadeOut("slow");	 
 }
