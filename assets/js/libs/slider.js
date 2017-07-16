$(function() {
    
//    initSlider();
//
//	function initSlider() {
//		var $Slider = $('.slider__container');
//		if ($Slider.length) {
//    		$Slider.carouFredSel({
//     		   circular: true,
//     		   infinite: false,
//     		   responsive: true,
//     		   height: 'auto',
//     		   items: {
//      		      visible: 1
//      		  },
//     		   auto: {
//     		       play: false,
//     		       timeoutDuration: 3000,
//     		       pauseOnHover: true
//     		   },
//      		  scroll: {
//      		      items: 1, 
//      		  },
//      		  prev: {
//      		      button: '.slider__nav--prev'
//     		   },
//     		   next: {
//      		      button: '.slider__nav--next'
//      		  },
//                
//    		});
//  		}
//	}
// 
//    $(".slider__item").click(function() {
//        $(".slider__container").trigger('slideTo',$('.slide:first'));
//        
//    });
  

// Переключалка слайдов на главной
        $('.slider__item:first, .slider__container .slide:first').addClass('current');
        $('.slider__container').on('click', '.switcher-item', function () {
            var $this = $(this),
                id = $this.attr('data-id') - 1;
            $(this).addClass('current').siblings().removeClass('current')
                .parents('.slider').find('.slider__container').find('.slide:eq(' + id + ')').addClass('current')
                .siblings().removeClass('current');
        });

        var $banner = $('.slider__container'),
            $mainSlider = $('.slider .slider__gallery');

        if($banner.length) {
            $banner.carouFredSel({
                circular: true,
     		   infinite: false,
     		   responsive: true,
     		   height: 'auto',
     		   items: {
      		      visible: 1
      		  },
                auto: {
                    play: false,
     		       timeoutDuration: 3000,
     		       pauseOnHover: true
                },
                scroll: {
                    fx: 'crossfade',
                    duration: 500,
                    items: 1,
                    onBefore: function () {
                        // Двигаем превьюшки
                        var i = $(this).triggerHandler('currentPosition');
                        $mainSlider.find('.slider__item').removeClass('current');
                        $mainSlider.find('.slider__item[data-num="' + i + '"]').addClass('current');
                        $mainSlider.trigger('slideTo', i);
                    }
                },
                 prev: {
      		      button: '.slider__nav--prev'
     		   },
     		   next: {
      		      button: '.slider__nav--next'
      		  },
            });
        }


        // Слайдер на главной
        if ($mainSlider.length) {
            $mainSlider.find('.slider__item:first').addClass('current');
            $mainSlider.carouFredSel({
                circular: false,
                infinite: false,
                items: {
                    visible: 4
                },
                auto: {
                    play: false
                },
                scroll: {
                    items: 1
                }
                
            });
        }

        $mainSlider.find('.slider__item').each(function (i) {
            $(this).attr('data-num', i);

            // Двигаем основной слайдер при клике по превьюшке
            $(this).click(function () {
                pos = Math.floor($(this).attr('data-num'));
                $banner.trigger('slideTo', [pos, 0, true]);
                //setTimeout(function () {
                //    $banner.trigger('pause', true);
                //}, 2000);
                return false;
            });
        });
});