new Vue({
  el: "#app",
  data() {
    return {
      audio: null,
      circleLeft: null,
      barWidth: null,
      duration: null,
      currentTime: null,
      isTimerPlaying: false,
      tracks: [
        {
          name: "Money",
          artist: "Pink Floyd",
          cover: "http://www.nacionrock.com/wp-content/uploads/pink_floyd_money_savings-e1557252610867.jpg",
          source: "https://ia601507.us.archive.org/35/items/snap-save.io-pink-floyd-money-official-music-video-128-kbps/SnapSave.io%20-%20Pink%20Floyd%20-%20Money%20%28Official%20Music%20Video%29%20%28128%20kbps%29.mp3",
          url: "https://www.youtube.com/watch?v=-0kcet4aPpQ&ab_channel=PinkFloyd",
          favorited: false
        },
        {
          name: "Jump",
          artist: "Van Halen",
          cover: "https://m.media-amazon.com/images/I/61VueLkzmKL._SY450_.jpg",
          source: "https://ia601507.us.archive.org/35/items/snap-save.io-pink-floyd-money-official-music-video-128-kbps/SnapSave.io%20-%20Van%20Halen%20-%20Jump%20%28Official%20Music%20Video%29%20%28128%20kbps%29.mp3",
          url: "https://www.youtube.com/watch?v=SwYN7mTi6HM&ab_channel=VHTelevision",
          favorited: false
        },
        {
          name: "Livin' on a prayer",
          artist: "Bon Jovi",
          cover: "https://i.scdn.co/image/ab67616d0000b2731336b31b6a1799f0de5807ac",
          source: "https://ia601509.us.archive.org/30/items/snap-save.io-post-malone-white-iverson-128-kbps/SnapSave.io%20-%20Bon%20Jovi%20-%20Livin%27%20On%20A%20Prayer%20%28128%20kbps%29.mp3",
          url: "https://www.youtube.com/watch?v=lDK9QqIzhwk&ab_channel=BonJoviVEVO",
          favorited: false
        },
        {
          name: "Faded",
          artist: "Alan Walker",
          cover: "https://pics.filmaffinity.com/Alan_Walker_Faded_V_deo_musical-810153571-large.jpg",
          source: "https://ia601509.us.archive.org/30/items/snap-save.io-post-malone-white-iverson-128-kbps/SnapSave.io%20-%20Alan%20Walker%20-%20Faded%20%28128%20kbps%29.mp3",
          url: "https://www.youtube.com/watch?v=60ItHLz5WEA&ab_channel=AlanWalker",
          favorited: false
        },
        {
          name: "Forbidden voices",
          artist: "Martin Garrix",
          cover: "https://i.scdn.co/image/ab67616d0000b2735a68d024d71cba0508ac3664",
          source: "https://ia601509.us.archive.org/30/items/snap-save.io-post-malone-white-iverson-128-kbps/SnapSave.io%20-%20Martin%20Garrix%20-%20Forbidden%20Voices%20%28Official%20Music%20Video%29%20%28128%20kbps%29.mp3",
          url: "https://www.youtube.com/watch?v=Zv1QV6lrc_Y&ab_channel=MartinGarrix",
          favorited: false
        },
        {
          name: "All girls are the same",
          artist: "Juice WRLD",
          cover: "https://i1.sndcdn.com/artworks-000570890261-j87pt9-t500x500.jpg",
          source: "https://ia601508.us.archive.org/6/items/snap-save.io-juice-wrld-all-girls-are-the-same-directed-by-cole-bennett-256-kbps/SnapSave.io%20-%20Juice%20WRLD%20-%20All%20Girls%20Are%20The%20Same%20%28Directed%20by%20Cole%20Bennett%29%20%28256%20kbps%29.mp3",
          url: "https://www.youtube.com/watch?v=h3EJICKwITw&ab_channel=LyricalLemonade",
          favorited: false
        },
        {
          name: "White Iverson",
          artist: "Post Malone",
          cover: "https://i.scdn.co/image/ab67616d0000b27355404f712deb84d0650a4b41",
          source: "https://ia601509.us.archive.org/30/items/snap-save.io-post-malone-white-iverson-128-kbps/SnapSave.io%20-%20Post%20Malone%20-%20White%20Iverson%20%28128%20kbps%29.mp3",
          url: "https://www.youtube.com/watch?v=SLsTskih7_I&ab_channel=PostMalone",
          favorited: false
        },
        {
          name: "Changes",
          artist: "2Pac",
          cover: "https://cdn5.beatstars.com/eyJidWNrZXQiOiJidHMtY29udGVudCIsImtleSI6InVzZXJzL3Byb2QvODU3Nzc3L2ltYWdlLzhiaEJCVXhXTXhpZS8xNTU3NzY2Njg1LnBuZyIsInRpbWVzdGFtcCI6bnVsbCwiZWRpdHMiOnsicmVzaXplIjp7ImZpdCI6bnVsbCwid2lkdGgiOjcwMCwiaGVpZ2h0Ijo3MDB9fX0=?t=1666270679401",
          source: "https://ia601509.us.archive.org/30/items/snap-save.io-post-malone-white-iverson-128-kbps/SnapSave.io%20-%202Pac%20-%20Changes%20ft.%20Talent%20%28128%20kbps%29.mp3",
          url: "https://www.youtube.com/watch?v=eXvBjCO19QY&ab_channel=2PacVEVO",
          favorited: false
        },
        {
          name: "New Rules",
          artist: "Dua Lipa",
          cover: "https://i1.sndcdn.com/artworks-B2WQ5zkzbhqMEFO2-gRpzFg-t500x500.jpg",
          source: "https://ia801409.us.archive.org/34/items/snap-save.io-dua-lipa-new-rules-official-music-video-128-kbps/SnapSave.io%20-%20Dua%20Lipa%20-%20New%20Rules%20%28Official%20Music%20Video%29%20%28128%20kbps%29.mp3",
          url: "https://www.youtube.com/watch?v=k2qgadSvNyU&ab_channel=DuaLipa",
          favorited: false
        },
        {
          name: "Demons",
          artist: "Imagine Dragons",
          cover: "https://i.scdn.co/image/ab67616d0000b273b2b2747c89d2157b0b29fb6a",
          source: "https://ia601506.us.archive.org/25/items/snap-save.io-imagine-dragons-demons-official-music-video-128-kbps/SnapSave.io%20-%20Imagine%20Dragons%20-%20Demons%20%28Official%20Music%20Video%29%20%28128%20kbps%29.mp3",
          url: "https://www.youtube.com/watch?v=mWRsgZuwf_8&ab_channel=ImagineDragonsVEVO",
          favorited: false
        },
        {
          name: "Maps",
          artist: "Maroon 5",
          cover: "https://i1.sndcdn.com/artworks-000090786178-334x1s-t500x500.jpg",
          source: "https://ia601506.us.archive.org/25/items/snap-save.io-imagine-dragons-demons-official-music-video-128-kbps/SnapSave.io%20-%20Maroon%205%20-%20Maps%20%28Lyric%20Video%29%20%28128%20kbps%29.mp3",
          url: "https://www.youtube.com/watch?v=Y7ix6RITXM0&ab_channel=Maroon5VEVO",
          favorited: false
        },
        {
          name: "Moscow Mule",
          artist: "Bad Bunny",
          cover: "https://images.genius.com/0c93db95b0db6cc1a030501845da4291.1000x1000x1.jpg",
          source: "https://ia904708.us.archive.org/17/items/snap-save.io-bad-bunny-moscow-mule-video-oficial-un-verano-sin-ti-128-kbps/SnapSave.io%20-%20Bad%20Bunny%20-%20Moscow%20Mule%20%28Video%20Oficial%29%20_%20Un%20Verano%20Sin%20Ti%20%28128%20kbps%29.mp3",
          url: "https://www.youtube.com/watch?v=p38WgakuYDo&ab_channel=BadBunny",
          favorited: false
        },
        {
          name: "Pantysito",
          artist: "Feid, Alejo & Robi",
          cover: "https://i1.sndcdn.com/artworks-hpyayLT0djglmo49-oCgs3Q-t500x500.jpg",
          source: "https://ia904708.us.archive.org/17/items/snap-save.io-bad-bunny-moscow-mule-video-oficial-un-verano-sin-ti-128-kbps/SnapSave.io%20-%20Feid%2C%20Alejo%20%26%20Robi%20-%20Pantysito%20%28Official%20Video%29%20%28128%20kbps%29.mp3",
          url: "https://www.youtube.com/watch?v=Fa2qpmVwNQ8&ab_channel=FeidVEVO",
          favorited: false
        }
      ],
      currentTrack: null,
      currentTrackIndex: 0,
      transitionName: null
    };
  },
  methods: {
    play() {
      if (this.audio.paused) {
        this.audio.play();
        this.isTimerPlaying = true;
      } else {
        this.audio.pause();
        this.isTimerPlaying = false;
      }
    },
    generateTime() {
      let width = (100 / this.audio.duration) * this.audio.currentTime;
      this.barWidth = width + "%";
      this.circleLeft = width + "%";
      let durmin = Math.floor(this.audio.duration / 60);
      let dursec = Math.floor(this.audio.duration - durmin * 60);
      let curmin = Math.floor(this.audio.currentTime / 60);
      let cursec = Math.floor(this.audio.currentTime - curmin * 60);
      if (durmin < 10) {
        durmin = "0" + durmin;
      }
      if (dursec < 10) {
        dursec = "0" + dursec;
      }
      if (curmin < 10) {
        curmin = "0" + curmin;
      }
      if (cursec < 10) {
        cursec = "0" + cursec;
      }
      this.duration = durmin + ":" + dursec;
      this.currentTime = curmin + ":" + cursec;
    },
    updateBar(x) {
      let progress = this.$refs.progress;
      let maxduration = this.audio.duration;
      let position = x - progress.offsetLeft;
      let percentage = (100 * position) / progress.offsetWidth;
      if (percentage > 100) {
        percentage = 100;
      }
      if (percentage < 0) {
        percentage = 0;
      }
      this.barWidth = percentage + "%";
      this.circleLeft = percentage + "%";
      this.audio.currentTime = (maxduration * percentage) / 100;
      this.audio.play();
    },
    clickProgress(e) {
      this.isTimerPlaying = true;
      this.audio.pause();
      this.updateBar(e.pageX);
    },
    prevTrack() {
      this.transitionName = "scale-in";
      this.isShowCover = false;
      if (this.currentTrackIndex > 0) {
        this.currentTrackIndex--;
      } else {
        this.currentTrackIndex = this.tracks.length - 1;
      }
      this.currentTrack = this.tracks[this.currentTrackIndex];
      this.resetPlayer();
    },
    nextTrack() {
      this.transitionName = "scale-out";
      this.isShowCover = false;
      if (this.currentTrackIndex < this.tracks.length - 1) {
        this.currentTrackIndex++;
      } else {
        this.currentTrackIndex = 0;
      }
      this.currentTrack = this.tracks[this.currentTrackIndex];
      this.resetPlayer();
    },
    resetPlayer() {
      this.barWidth = 0;
      this.circleLeft = 0;
      this.audio.currentTime = 0;
      this.audio.src = this.currentTrack.source;
      setTimeout(() => {
        if (this.isTimerPlaying) {
          this.audio.play();
        } else {
          this.audio.pause();
        }
      }, 300);
    },
    favorite() {
      this.tracks[this.currentTrackIndex].favorited = !this.tracks[
        this.currentTrackIndex
      ].favorited;
    }
  },
  created() {
    let vm = this;
    this.currentTrack = this.tracks[0];
    this.audio = new Audio();
    this.audio.src = this.currentTrack.source;
    this.audio.ontimeupdate = function () {
      vm.generateTime();
    };
    this.audio.onloadedmetadata = function () {
      vm.generateTime();
    };
    this.audio.onended = function () {
      vm.nextTrack();
      this.isTimerPlaying = true;
    };

    // this is optional (for preload covers)
    for (let index = 0; index < this.tracks.length; index++) {
      const element = this.tracks[index];
      let link = document.createElement('link');
      link.rel = "prefetch";
      link.href = element.cover;
      link.as = "image"
      document.head.appendChild(link)
    }
  }
});



function maxLength() {
  document.getElementById("name").maxLength = 30;
  document.getElementById("surname").maxLength = 30;
  document.getElementById("email").maxLength = 50;
}

function maxCharacters() {
  let a = document.getElementById("name").value.length;
  let b = document.getElementById("surname").value.length;
  let c = document.getElementById("email").value.length;
  if (a == 30) {
    let name = document.getElementById("name").value;
    document.getElementById("name").value = name.substr(0, name.length - 1);
    window.alert("Max number of characters");
  }
  else if (b == 30) {
    let surname = document.getElementById("surname").value;
    document.getElementById("surname").value = surname.substr(0, surname.length - 1);
    window.alert("Max number of characters");
  }
  else if (c == 50) {
    let email = document.getElementById("email").value;
    document.getElementById("email").value = email.substr(0, email.length - 1);
    window.alert("Max number of characters");
  }
}

function checkData() {
  let a = document.getElementById("name").value;
  let b = document.getElementById("surname").value;
  let c = document.getElementById("email").value;
  let d = document.getElementById("phone").value;

  if (a == "" || b == "" || c == "" || d == "") {
    alert("Enter all the data");
  } else {
    alert("DATA OK");
    location.reload();
    //document.getElementById("sendData").data-bs-toggle("modal");
  }
}