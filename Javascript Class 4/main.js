	function toggleSong() {							//created function to  reduce the writing code again n again
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
		
					function fancyTimeFormat(time)
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
					
		
		
	
				function updateCurrentTime() {
					var song = document.querySelector('audio');
					var currentTime = Math.floor(song.currentTime);
					currentTime = fancyTimeFormat(currentTime);
					var duration = Math.floor(song.duration);
					duration = fancyTimeFormat(duration)
					$('.time-elapsed').text(currentTime);
					$('.song-duration').text(duration);
				}
					window.onload = function() {
					//$('#song1 .song-name').text(songlist[0]);
					//$('#song2 .song-name').text(songlist[1]);
					//$('#song3 .song-name').text(songlist[2]);
					//$('#song4 .song-name').text(songlist[3]);
					updateCurrentTime(); 
					setInterval(function() {
					updateCurrentTime();
					},1000);
					}
						function addSongNameClickEvent(songName,position) {
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
						}
						});
						}
						//var songName1 = 'Jaanu';
				// var songName2 = 'Never Give Up';
				 //var songName3 = 'My Heart will go on';
				 //var songName4 = 'Despacito';
				 var songlist=[ 'Jaanu', 'Dont let me down', 'My Heart will go on', 'Despacito'];
				 //var fileName=['song1.mp3','song2.mp3','song3.mp3','song4.mp3'];
				 //var artistList = ['Garry Sandhu', 'Chainsmokers', 'Celine Dion', 'Luis Fonsi']; 	
				// var albumList = ['Jaanu','Collage','Titanic','Despacito'];
				//var durationList = ['4:13','3:28','5:10','4:41'];
					//for(i=0; i<fileName.length; i++)
								//{
						
								//addSongNameClickEvent(fileName[i],i+1);
								//toggleSong();
								//}
						var songs = [{
								'name': 'Jaanu',
								'artist': 'Garry Sandhu',
								'album': 'Jaanu',
								'duration': '4:13',
							   'fileName': 'song1.mp3'
							},
							{
								'name': 'Dont let me down',
								'artist': 'Chainsmokers',
								'album': 'Collage',
								'duration': '3:28',
								'fileName': 'song2.mp3'
							},
							{
								'name': 'My heart will go on',
								'artist': 'Celine Dion',
								'album': 'Titanic',
								'duration': '5:10',
								'fileName': 'song3.mp3'
							},
							{
								'name': 'Despacito',
								'artist': 'Luis Fonsi',
								'album': 'Despacito',
								'duration': '4:41',
								'fileName': 'song4.mp3'
							}]

								
					for(var i =0; i < songlist.length;i++) {
						var obj = songs[i];
							var name = '#song' + (i+1);
							var song = $(name);
							song.find('.song-name').text(obj.name);
							song.find('.song-artist').text(obj.artist);
							song.find('.song-album').text(obj.album);
							song.find('.song-length').text(obj.duration); 
							 addSongNameClickEvent(obj.fileName,i+1)
						}
					
					
		$('.welcome-screen button').on('click', function() {
        var name = $('#name-input').val();
        if (name.length > 2) {
            var message = "Welcome, " + name;
            $('.main .user-name').text(message);
            $('.welcome-screen').addClass('hidden');
            $('.main').removeClass('hidden');
        } else {
            $('#name-input').addClass('error');
        }
    });
    $('.play-icon').on('click', function() {
        toggleSong();
    });
    $('body').on('keypress', function(event) {
                if (event.keyCode == 32) {
                   toggleSong();
				   }
            });