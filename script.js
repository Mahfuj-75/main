

    // year
    document.getElementById('year').textContent = new Date().getFullYear();

    // simple typing effect
    const targets = ['C# Development',
  '.NET Framework Projects',
  'Desktop Applications',
  'Object-Oriented Programming',
  'Software Engineering',
  'Scalable Systems',
  ];
    let i = 0, j = 0, forward = true;
    const el = document.getElementById('type-target');
    function step(){
      const word = targets[i];
      if(forward){
        el.textContent = word.slice(0, j+1);
        j++;
        if(j === word.length){ forward = false; setTimeout(step, 900); return }
      } else {
        el.textContent = word.slice(0, j-1);
        j--;
        if(j === 0){ forward = true; i = (i+1)%targets.length }
      }
      setTimeout(step, forward?80:40);
    }
    step();

    // scroll reveal
    const faders = document.querySelectorAll('.fade-up');
    const obs = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{ if(e.isIntersecting) e.target.classList.add('show') })
    },{threshold:0.12});
    faders.forEach(f=>obs.observe(f));

    // contact form (demo) — prevents real submission
    document.getElementById('contactForm').addEventListener('submit', function(e){
      e.preventDefault();
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const msg = document.getElementById('message').value.trim();
      if(!name || !email || !msg){ alert('Please fill all fields'); return }
      alert('Thanks, ' + name + '! (This is a demo form — hook it to your backend or email service)');
      this.reset();
    });
  
