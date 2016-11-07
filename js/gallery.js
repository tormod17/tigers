(function(){
	var $ = window.$
	var IMGURLS = ["images/gallery/thumb/Dav10.JPG",
					"images/gallery/thumb/Dav2.JPG",
					"images/gallery/thumb/Dav3.JPG",
					"images/gallery/thumb/Dav4.JPG",
					"images/gallery/thumb/Dav5.JPG",
					"images/gallery/thumb/Dav6.jpg",
					"images/gallery/thumb/Dav7.JPG",
					"images/gallery/thumb/Dav8.JPG",
					"images/gallery/thumb/Lborogh2005.jpg",
					"images/gallery/thumb/P3190941.jpg",				
					"images/gallery/thumb/P3191059.jpg",					
					"images/gallery/thumb/viewphoto0.jpg",
					//"images/gallery/thumb/viewphoto00.jpg",
					"images/gallery/thumb/viewphoto01.jpg",
					"images/gallery/thumb/viewphoto02.jpg",
					"images/gallery/thumb/viewphoto020.jpg",
					"images/gallery/thumb/viewphoto021.jpg",
					"images/gallery/thumb/viewphoto2.jpg",
					"images/gallery/thumb/Spain2005.jpg",
					"images/gallery/thumb/viewphoto8.jpg",
					"images/gallery/thumb/Poland_025.jpg",
					"images/gallery/thumb/P3190944_1.jpg",
					"images/gallery/thumb/viewphoto4.jpg"]

	var imgGallery = {
		INIT: function(){
			var images = this.createImages(IMGURLS);
    		var target = document.getElementById('gallery')
    		this.appendImages(target, images)
		},
    	createImages: function(images){
    		var self = this;
    		var imgArray = images.map(function(image){
    		var img = document.createElement('img')
	    	    self.setAttributes(img, {
	    				src: image,
	    				height:"350",
	    				width:"600",
	    				class:"thumbnail img-responsive"
	    		})
	    		container = self.createImgContainer(img)
	    		return container
    		});
    		return imgArray ;	
    	},
		setAttributes: function(el, attr){
    		for(var key in attr){
    			el.setAttribute(key, attr[key])
    		}
    	},
    	createImgContainer: function(img){
    		var container = document.createElement('div')
    		container.className += "col-lg-3 col-sm-3 col-xs-6"
    		container.appendChild(img);
    		return container
    	},
	    appendImages: function(target, array){
    		var docFrag = document.createDocumentFragment();
    			array.forEach(function(ele){
    				docFrag.appendChild(ele)
    		});
    		target.appendChild(docFrag);
    	}
	}
	imgGallery.INIT()

	var carouselModal ={
		INIT : function(){
			this.showModal()
			this.controls(IMGURLS);
		},
		showModal: function(){
			var self =this;
			$('.thumbnail').click(function(e){
				var img = e.target.cloneNode(true);
	    		$('.carousel-inner').html(img)
	    		$('#myModal').modal('show'); 
			});
		},
		getCurrentIndex: function(images){
			var src = $('.carousel-inner').children()[0].getAttribute('src')
			return images.indexOf(src);
		},
		getNewIndex: function(eleClass, index){
			var newIndex = index;
			return newIndex += (eleClass.indexOf('right') > -1) ? 1 : -1;
		},
		changeImg: function(index, images){
			 var l = images.length;
			 if( index > (l-1) ){
			 	index = index - l
			 } else if ( index < 0 ){
			 	index = l -index
			 }
			var newSrc = images[index]
		  	var currentImg = $('.carousel-inner').children('img')[0]
		  	currentImg.setAttribute('src', newSrc);
		},
		controls: function(images){
			var self= this;
			$('.carousel-control').click(function(e){
				var currentIndex = self.getCurrentIndex(images);
     			var activeClass = e.target.getAttribute('class');
			  	var newIndex = self.getNewIndex(activeClass, currentIndex);
				self.changeImg(newIndex, images);
			})
		}
	}
 	carouselModal.INIT()
}());					