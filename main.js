
				// variables
		var currentSongNumber = 1;
		var willLoop = 0;
		var willShuffle = 0;
		var mute = 0;


			//functions

		function randomExcluded(min, max, excluded) {					//shuffling function
		var n = Math.floor(Math.random() * (max-min) + min);
		if (n >= excluded) n++;
		return n;
}


function setvolume() {						//volumeslider function
	var song = document.querySelector('audio');
	song.volume = slider.value/100;
}




	function toggleSong() {							//function to play pause any song
		var song = document.querySelector('audio');
		if(song.paused == true) {
		console.log('Playing');
		$('.play-icon').removeClass('fa-play').addClass('fa-pause');
		song.play();
		}
		else {
		console.log('Pausing');
		$('.play-icon').removeClass('fa-pause').addClass('fa-play');
		song.pause();
		}
		}
						function changeCurrentSongDetails(songobj) {			// this function define the details of the song whenever the song is paly or pause
							$('.current-song-image').attr('src','img/' + songobj.image);
							$('.current-song-name').text(songobj.name);
							$('.current-song-album').text(songobj.album);
						}


						function UpdateTimer() {									//function to show the progressbar of the playing song
						var song = document.querySelector('audio');
						var ct = song.currentTime;
						var td = song.duration;
						var percentage = (ct/td)*100;
						$('.progress-filled').css('width', percentage+ "%");
						}



					function fancyTimeFormat(time)       //function of time conversion of miliseconds to minutes and seconds
			{
				// Hours, minutes and seconds
				var hrs = ~~(time / 3600);
				var mins = ~~((time % 3600) / 60);
				var secs = time % 60;

				// Output like "1:01" or "4:03:59" or "123:03:59"
				var ret = "";

				if (hrs > 0) {
					ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
				}

				ret += "" + mins + ":" + (secs < 10 ? "0" : "");
				ret += "" + secs;
				return ret;
			}

				function updateCurrentTime() {								//function to show the current time of playing currentsong
					var song = document.querySelector('audio');
					var currentTime = Math.floor(song.currentTime);
					currentTime = fancyTimeFormat(currentTime);
					var duration = Math.floor(song.duration);
					duration = fancyTimeFormat(duration);
					$('.time-elapsed').text(currentTime);
					$('.song-duration').text(duration);
					//updateProgressbar () ;
				}

				function timeJump() {									//function to end any song
				var song = document.querySelector('audio')
				song.currentTime = song.duration - 5;
				}

					window.onload = function() {
						changeCurrentSongDetails(songs[0]);    // update the 1st details of the 'songs object' when the window is loading
					//$('#song1 .song-name').text(songlist[0]);
					//$('#song2 .song-name').text(songlist[1]);
					//$('#song3 .song-name').text(songlist[2]);
					//$('#song4 .song-name').text(songlist[3]);
					updateCurrentTime();
					setInterval(function() {
					updateCurrentTime();
					UpdateTimer();				//progressbar function called
					},1000);

					$('#songs').DataTable({
						paging: false
					});

					}
						function addSongNameClickEvent(songobj,position) {				//ability to click on any song to play nd pause
							var songName = songobj.fileName;
							var id = '#song' + position;
						$(id).click(function() {
						var audio = document.querySelector('audio');
						var currentSong = audio.src;
						if(currentSong.search(songName) != -1)
						{
						toggleSong();
						}
						else {

						audio.src = songName;
						toggleSong();
						console.log(obj);
						changeCurrentSongDetails(songobj);
						}
						});
						}
						//var songName1 = 'Jaanu';
				// var songName2 = 'Never Give Up';
				 //var songName3 = 'My Heart will go on';
				 //var songName4 = 'Despacito';
				 //var songlist=[ 'Rockabye', 'Dont let me down', 'My Heart will go on', 'Despacito'];
				 var fileName=['song1.mp3','song2.mp3','song3.mp3','song4.mp3','song5.mp3','song6.mp3'];
				 //var artistList = ['Garry Sandhu', 'Chainsmokers', 'Celine Dion', 'Luis Fonsi'];
				// var albumList = ['Jaanu','Collage','Titanic','Despacito'];
				//var durationList = ['4:13','3:28','5:10','4:41'];
					//for(i=0; i<fileName.length; i++)
								//{

								//addSongNameClickEvent(fileName[i],i+1);
								//toggleSong();
								//}
						var songs = [{																	//created array of objects
								'name': 'Rockabye',
								'artist': ' Clean Bandit',
								'album': 'Rockabye Baby',
								'duration': '4:13',
							   'fileName': 'song1.mp3',
							   'image' : 'song1.jpg'
							},
							{
								'name': 'Dont let me down',
								'artist': 'Chainsmokers',
								'album': 'Collage',
								'duration': '3:28',
								'fileName': 'song2.mp3',
								'image' : 'song2.jpg'
							},
							{
								'name': 'My heart will go on',
								'artist': 'Celine Dion',
								'album': 'Titanic',
								'duration': '5:10',
								'fileName': 'song3.mp3',
								'image' : 'song3.jpg'
							},
							{
								'name': 'Despacito',
								'artist': 'Luis Fonsi',
								'album': 'Despacito',
								'duration': '4:41',
								'fileName': 'song4.mp3',
								'image' : 'song4.jpg'
							},
							{
								'name': 'Let me Love you',
								'artist': ' DJ Snake',
								'album': 'Encore',
								'duration': '3:25',
							   'fileName': 'song5.mp3',
							   'image' : 'song5.jpg'
							},

							{
								'name': 'Baby this is what you came for',
								'artist': 'Calvin Harris ft  Rihanna',
								'album': 'Encore',
								'duration': '3:59',
							   'fileName': 'song6.mp3',
							   'image' : 'song6.jpg'
							}]


					for(var i =0; i < songs.length;i++) {							//shows the list of songs using objects
						var obj = songs[i];
							var name = '#song' + (i+1);
							var song = $(name);
							song.find('.song-name').text(obj.name);
							song.find('.song-artist').text(obj.artist);
							song.find('.song-album').text(obj.album);
							song.find('.song-length').text(obj.duration);
							 addSongNameClickEvent(obj,i+1)
						}

							$('.fa-repeat').on('click',function() {						//created to add ability the of repeat the songs in loop
							$('.fa-repeat').toggleClass('disabled')
							willLoop = 1 - willLoop;
							});

							$('.fa-random').on('click',function() {							//it will shuffle the songs
							$('.fa-random').toggleClass('disabled');
							willShuffle = 1 - willShuffle;
							});

							$('audio').on('ended',function() {							//code of shuffling nd repeat/loop
								var audio = document.querySelector('audio');
								if (willShuffle == 1) {
									var nextSongNumber = randomExcluded(1,6,currentSongNumber); // Calling our function from Stackoverflow
									var nextSongobj = songs[nextSongNumber-1];
									audio.src = nextSongobj.fileName;
									toggleSong();
									changeCurrentSongDetails(nextSongobj);
									currentSongNumber = nextSongNumber;
								}
								else if(currentSongNumber < 6) {
									var nextSongobj = songs[currentSongNumber];
									audio.src = nextSongobj.fileName;
									toggleSong();
									changeCurrentSongDetails(nextSongobj);
									currentSongNumber = currentSongNumber + 1;
								}
								else if(willLoop == 1) {
									var nextSongobj = songs[0];
									audio.src = nextSongobj.fileName;
									toggleSong();
									changeCurrentSongDetails(nextSongobj);
									currentSongNumber =  1;
								}
								else {
									$('.play-icon').removeClass('fa-pause').addClass('fa-play');
									audio.currentTime = 0;
								}
							});


		$('.welcome-screen button').on('click', function() {       //by filling the input field go to the next or main page
        var name = $('#name-input').val();
        if (name.length > 2) {
            var message = "Welcome to Songify, " + name;
            $('.main .user-name').text(message);
            $('.welcome-screen').addClass('hidden');
            $('.main').removeClass('hidden');
        } else {
            $('#name-input').addClass('error');
        }
    });
    $('.play-icon').on('click', function() {						//play and pause the song
        toggleSong();
    });
			$('body').on('keypress',function(event) {    //play pause the song by spacebar
			var target = event.target;
			if (event.keyCode == 32 && target.tagName !='INPUT')     // spacebar doesnot work on input field
			{
				toggleSong();
			}
		});

		//	$('.back-button').on('click', function() {
				//$('.main').addClass('hidden');
          //  $('.welcome-screen').removeClass('hidden');

		//	});
			$('.fa-volume-up').on('click',function(){        //mute and unmute the song
	 var audio = document.querySelector('audio');
	 if(mute == 0){
		 audio.muted = true;
		 mute = 1;
		 console.log('mute');
		 $('.mute').removeClass('fa-volume-up').addClass('fa-volume-off');
	 }
	 else {
		  audio.muted = false;
		  mute = 0;
		  console.log('unmute')
		   $('.mute').removeClass('fa-volume-off').addClass('fa-volume-up');

	 }
});

						$('.fa-step-forward').on('click', function() {
							$('.fa-step-forward').toggleClass('disabled')			//play and pause next song by clicking the next song
							console.log('nextsong');
						var audio = document.querySelector('audio');
						var nextSongobj = songs[currentSongNumber];
						audio.src = nextSongobj.fileName;
						toggleSong();
						//console.log('nextsong');
						changeCurrentSongDetails(nextSongobj);
						currentSongNumber = currentSongNumber + 1;


						});

						$('.fa-step-backward').on('click', function() {   			//play and pause the previous song
							$('.fa-step-backward').toggleClass('disabled')


						var audio = document.querySelector('audio');
						var nextSongobj = songs[currentSongNumber];
						audio.src = nextSongobj.fileName;
						toggleSong();
						changeCurrentSongDetails(nextSongobj);
						currentSongNumber = currentSongNumber - 1;



						});



						$('#slider').on('mousemove', function() {								// increase and decrease the volume by volume slider
								setvolume();
						});