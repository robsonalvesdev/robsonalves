/*!
* Start Bootstrap - Agency v7.0.11 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});


function fnAbout(element, index, array) {

    var ul = document.getElementById("timelines");

    if ((index % 2) === 0) {
        ul.innerHTML += `
        <li>
            <div class="timeline-image"><img class="rounded-circle img-fluid" src="assets/img/about/1.jpg" alt="..." /></div>
            <div class="timeline-panel">
                <div class="timeline-heading">
                    <h4>2009-2011</h4>
                    <h4 class="subheading">${element}</h4>
                </div>
                <div class="timeline-body"><p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
            </div>
        </li>`
    }
    else {
        ul.innerHTML += `
        <li class="timeline-inverted">
            <div class="timeline-image"><img class="rounded-circle img-fluid" src="assets/img/about/2.jpg" alt="..." /></div>
            <div class="timeline-panel">
                <div class="timeline-heading">
                    <h4>March 2011</h4>
                    <h4 class="subheading">${element}</h4>
                </div>
                <div class="timeline-body"><p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
            </div>
        </li>
        `;
    }
}

["Robson", "Ana Julia", "Henrique", "Gabriel"].forEach(fnAbout);

var ulAbout = document.getElementById("timelines");

ulAbout.innerHTML += `
  <li class="timeline-inverted">
  <div class="timeline-image">
      <h4>
          Be Part
          <br />
          Of Our
          <br />
          Story!
      </h4>
  </div>
</li>
        `;



function fnCourses(element, index, array) {

    var ul = document.getElementById("timeline-courses");

    if ((index % 2) === 0) {
        ul.innerHTML += `
                <li>
                    <div class="timeline-image"><img class="rounded-circle img-fluid" src="assets/img/about/1.jpg" alt="..." /></div>
                    <div class="timeline-panel">
                        <div class="timeline-heading">
                            <h4>2009-2011</h4>
                            <h4 class="subheading">${element}</h4>
                        </div>
                        <div class="timeline-body"><p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
                    </div>
                </li>`
    }
    else {
        ul.innerHTML += `
                <li class="timeline-inverted">
                    <div class="timeline-image"><img class="rounded-circle img-fluid" src="assets/img/about/2.jpg" alt="..." /></div>
                    <div class="timeline-panel">
                        <div class="timeline-heading">
                            <h4>March 2011</h4>
                            <h4 class="subheading">${element}</h4>
                        </div>
                        <div class="timeline-body"><p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
                    </div>
                </li>
                `;
    }
}

["Robson 1", "Ana Julia 2", "Henrique 3", "Gabriel 4"].forEach(fnCourses);

var ulCourses = document.getElementById("timeline-courses");

ulCourses.innerHTML += `
          <li class="timeline-inverted">
          <div class="timeline-image">
              <h4>
                  Be Part
                  <br />
                  Of Our
                  <br />
                  Story!
              </h4>
          </div>
        </li>
                `;

