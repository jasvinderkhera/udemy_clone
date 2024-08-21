
let parent_width = $(".cat_box").width()
let child_width = $(".sub_categories").width()
let translate = 0
let max = child_width - parent_width

function setWidth() {

}
//max translate = child_width - parent_width
function left(button) {
  if (translate <= 0) {
    $(button).hide()
    $(button).parent().parent().find(".right").show()
  } else {
    translate -= 50
  }

  console.log(parent_width, child_width)
  // $(".child").css("transform","translateX("+translate+"px)")
  $(button).parent().parent().find(".cat_box").scrollLeft(translate)
}
function right(button) {
  if (translate >= max) {
    $(button).hide()

    $(button).parent().parent().find(".left").show()

  } else {
    translate += 50
  }

  console.log(parent_width, child_width)
  // $(".child").css("transform","translateX("+translate+"px)")
  $(button).parent().parent().find(".cat_box").scrollLeft(translate)

}




// Nav Tab js


var popoverTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="popover"]')
);
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl);
});


// function fetchData(){
//   fetch("https://raw.githubusercontent.com/jasvinderkhera/Fake-Server/main/CoursesServer.json").then(response=>response.json()).then((data)=>{

// let accordian_btn = document.querySelector(".accordiann")
// let content_info = document.querySelector(".content_info")

// for (let i = 0; i < data.length; i++) {
//   // console.log("Title:", data[i].title);
//   // console.log("Lectures:", data[i].lectures);
//   // console.log("Duration:", data[i].duration);

//   accordian_btn.innerHTML+= `

//             <div class="box1 d-flex align-items-center gap-3">
//               <i class="fa-solid fa-angle-down"></i> <p class="mb-0 fw-bolder">${data[i].title}</p>
//             </div>
//             <div class="box2">
//               <p class="mb-0">${data[i].lectures} . ${data[i].duration}</p>
//             </div>
//           </button>
// `


//   for (let j = 0; j < data[i].data.length; j++) {
//     // console.log(" - Lecture:", data[i].data[j].td_2);
//     // console.log(" - Duration:", data[i].data[j].td_4);
//     content_info.innerHTML+=`
//             <table>
//               <tr class="py-5">
//                 <td class="icon"><i class="${data[i].data[j].td_1}"></i></td>
//                 <td style="width:470px">${data[i].data[j].td_2}</td>
//                 <td class="preview">${data[i].data[j].td_3}</td>
//                 <td class="text-secondary">${data[i].data[j].td_4}</td>
//               </tr>
//             </table>
//           </div>
// `
//   }
// }
// })

// }
// fetchData()




function fetchData() {
  fetch("https://raw.githubusercontent.com/jasvinderkhera/Fake-Server/main/CoursesServer.json")
    .then(response => response.json())
    .then((data) => {

      let accordian_div = document.querySelector(".accordian_div");


      for (let i = 0; i < data.length; i++) {

        accordian_div.innerHTML += `
       <div class="accordian_parent border border-1">
        <button class="accordiann d-flex justify-content-between align-items-center px-4 py-3 border border-1">
          <div class="box1 d-flex align-items-center gap-3">
            <i class="fa-solid fa-angle-down"></i> 
            <p class="mb-0 fw-bolder">${data[i].title}</p>
          </div>
          <div class="box2">
            <p class="mb-0">${data[i].lectures} . ${data[i].duration}</p>
          </div>
          </button>
          <div class="content_info px-3 py-3" style="display:none;">
          </div>
       </div>
        `;

        for (let j = 0; j < data[i].data.length; j++) {
          let content_info = document.querySelectorAll(".content_info");
          content_info[i].innerHTML += `

            <table>
              <tr class="py-5">
                <td class="icon" style="width:40px"><i class="${data[i].data[j].td_1}"></i></td>
                <td style="width:430px">${data[i].data[j].td_2}</td>
                <td class="preview">${data[i].data[j].td_3}</td>
                <td class="text-secondary">${data[i].data[j].td_4}</td>
              </tr>
            </table>
          `;
        }
      }
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
}

fetchData()



// Accordian


document.addEventListener('click', function(event) {
  // Check if the clicked element is a button with the class 'accordiann'
  if (event.target.closest('.accordiann')) {
      const button = event.target.closest('.accordiann');
      const content = button.nextElementSibling;

      // Toggle the content visibility
      content.style.display = content.style.display === 'block' ? 'none' : 'block';

      // Toggle the icon direction
      const icon = button.querySelector('.fa-angle-down');
      icon.classList.toggle('rotate-icon');
  }
});



window.addEventListener('scroll', function() {
  var hiddenContent = document.querySelector('.fixed_container');
  var scrollPosition = window.scrollY || document.documentElement.scrollTop;

  if (scrollPosition > 300) { // Adjust this value to control when the element appears
      hiddenContent.style.display = 'block';
  } else {
      hiddenContent.style.display = 'none';
  }
});






