//jQuery  !!!!!!!!!!!!!!!!!!!!!!!!
$('.skill-per').each(function(){
    var $this = $(this);
    var per = $this.attr('per');
    $this.css("width",per+'%');
    $({animatedValue: 0}).animate({animatedValue: per},{
      duration: 8000,
      step: function(){
        $this.attr('per', Math.floor(this.animatedValue) + '%');
      },
      complete: function(){
        $this.attr('per', Math.floor(this.animatedValue) + '%');
      }
    });
  });
  
  //JavaScript !!!!!!!!!!!!!!!!!!!!!!!!!!
  let theme = localStorage.getItem('theme')

  if(theme== null){
    setTheme('light')
  }else{
    setTheme(theme)
  }


let themeDots = document.getElementsByClassName('theme-dot');


for(var i=0; themeDots.length > i; i++){
  themeDots[i].addEventListener('click',function(){
   let mode =this.dataset.mode
    setTheme(mode)
  })
}

function setTheme(mode){
  if(mode=='light'){
    document.getElementById('theme-style').href ='styles.css'
  }
  if(mode=='blue'){
    document.getElementById('theme-style').href ='blue.css'
  }
  if(mode=='green'){
    document.getElementById('theme-style').href ='green.css'
  }
  if(mode=='orange'){
    document.getElementById('theme-style').href ='orange.css'
  }
  localStorage.setItem('theme', mode)
}


