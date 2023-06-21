(function () {
      [...document.querySelectorAll(".control")].forEach(button => {
          button.addEventListener("click", function() {
              document.querySelector(".active-btn").classList.remove("active-btn");
              this.classList.add("active-btn");
              document.querySelector(".active").classList.remove("active");
              document.getElementById(button.dataset.id).classList.add("active");
          })
      });
      document.querySelector(".theme-btn").addEventListener("click", () => {
          document.body.classList.toggle("light-mode");
      })
  })();

  const downloadBtn = document.getElementById('downloadLink');
  downloadBtn.addEventListener('click', function(event) {
    event.preventDefault(); 

    const pdfPath = 'https://drive.google.com/drive/folders/1Qek_yof5EtrKrtjcIqSU8-t3e39VMmgC?usp=sharing';
    const link = document.createElement('a');
    link.href = pdfPath;
    link.download = 'pruthvi_resume.pdf';
    link.click();
  });


 

