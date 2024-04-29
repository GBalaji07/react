import React from 'react'
import dark from './dark.png'
import draw from './draw.png'
import brush from './brush.png'
import content from './content.png'
import Frame from './Frame.png'
import left from './left.png'
import items from './Items.png'
import drawing from './drawing.png'
import Brands from './Brands.png'
import avatar from './avatar.png'
import map from './map.png'
import google from './google.png'
import icon from './icon.png'
import vector1 from './Vector 1.png'
import vec from './vec.png'
import amaxon from './amaxon.png'
import micro from './micro.png'
import uber from './uber.png'
import drop from './drop.png'

const Header = () => {
  return (
    <div>
      <div className='header'>
        <div className='container'>
          <nav class="navbar navbar-expand-lg navbar-light ">
            <a class="navbar-brand" href="#"></a>
            <div className='tog'>

              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button></div>
            <div className='bar'>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                  <li class="">
                    <a class="hom" href="#">Home </a>
                  </li>
                  <li class="">
                    <a class="pro" href="#">Product</a>
                  </li>
                  <li class="">
                    <a class="" href="#">Pricing</a>
                  </li>

                  <li class="">
                    <a class="">About</a>
                  </li>
                  <li class="">
                    <a class="" href="#">Contact</a>
                  </li>


                </ul>
                <div className='dark'>
                  <img src={dark} width=""></img></div>
                <div className='bran1'>
                  <div className='icon'>
                    <div className='icon1'>
                      <i class="fa-brands fa-square-twitter"></i>


                    </div>
                    <div className='icon2'>
                      <i class="fa-brands fa-facebook"></i>
                    </div>
                    <div className='icon3'>
                      <i class="fa-brands fa-linkedin-in"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>


          </nav></div>
      </div>

      <section>
        <div className='product'>
          <div className='container'>
            <div className='row justifly-content-space-between'>

              <div className='col-lg-12'>
                <div className='pag  '>

                  <h1 className='start'>
                    The Best Product<br></br>
                    <span> Start from Figma</span>
                  </h1>
                  <p2 className='mos'>
                    Most Calendars are designed for teams.

                    Slate is designed
                    <br></br>forfreelancers
                  </p2>

                </div>
                <div class="d-grid prim " >
                  <button class="btt btn-primary" type="button">Try for free</button>

                </div>
              </div>

            </div>


          </div>
        </div>

      </section>
      <section>
        <div className='features'>
          <div className='container'>


            <div className='fea'>
              <h2>Features</h2>
              <p>
                Most Calendars are designed for terms
                Slate is  designed for freelancers
              </p>
            </div>



            <div className='open'>
              <div class="card-group">
                <div class="card">

                  <div class="card-body">
                    <img src={drawing}></img>
                    <h5 class="card-title">Open type features  variable fonts</h5>
                    <p class="card-text">Slate helps you see how
                      many more days you need
                      to work to reach your
                      financial goal.</p>
                  </div>
                </div>
                <div class="card">

                  <div class="card-body">
                    <img src={draw}></img>
                    <h5 class="card-title">Design with real data</h5>
                    <p class="card-text">Slate helps you see how
                      many more days you need
                      to work to reach your
                      financial goal.</p>
                  </div>
                </div>
                <div class="card">
                  <img src={brush}></img>
                  <div class="card-body">
                    <h5 class="card-title">Fastest way to
                      take action</h5>
                    <p class="card-text">Slate helps you see how
                      many more days you need
                      to work to reach your
                      financial goal.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className='note'>
              <img src={content} width='100%'></img>
            </div>
          </div></div>
      </section>
      <section>
        <div className='fast'>
          <div className='container'>
            <div className='row'>
              
              <div className='col-lg-6  '>
              <div className='try'>
                <div className='way'>
                  <h2>
                    Fastest way to
                    <br></br>
                    organize
                  </h2> </div>

                <p className='try1'>
                  Most calendars are designed for teams.<br></br>
                  Slate is designed for freelancers
                </p>

                <div className='button'>
                  <div class="d-grid ">
                    <button class="btn1 btn-primary" type="button">Try For Free</button>
                  </div>
                </div></div>


              </div>
              <div className='col-lg-6'>
                <img src={Frame} width='100%'></img>
              </div>

            </div></div>

        </div>
      </section>

      <section>
        <div className='finger'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-6'>
                <img src={left} width='100%'></img>
              </div>
              <div className='col-lg-6'>
                <h4>
                 <b> At your fingertips</b>
                </h4>

                <h2 className='light'>Lightning fast<br></br>
                  prototyping </h2>

                  <h4><b>Subscribe to our Newsletter</b></h4>
                  <p>Available exclusivery on Figmaland</p>
                <div className='form'>
                  <form class="row g-3">

                    <div class="col-auto">
                      <label for="email" class="visually-hidden">Your Email</label>
                      <input type="text" class="control" id="email" placeholder="email"></input>
                    </div>
                    <div class="col-auto bilo">
                      <button type="submit" class="btn3 btn-primary mb-3">Subcribe</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div></div>
      </section>
      <section><div className='container'>
        <div className='part'>
          <h2>Partners</h2>
          <p> Most calendars are designed for teams.<br></br>
            Slate is designed for freelancers</p>
        </div>
        <div className='row'>
          
          <div className='col-lg-3 p-0'>
          <div className='card'>
            <p  className='text-center'>Client Name</p>
            <img src={google}></img></div>
          </div>
          <div className='col-lg-3 p-0'>
            <div className='card'>
              <p className='text-center'>Client Name</p>
              <img src={amaxon}></img>
            </div>
          </div>
          <div className='col-lg-4 p-0'>
            <div className='card'>
              <p className='text-center'>Client Name</p>
              <img src={micro}></img>
            </div>
          </div>
          <div className='col-lg-2 p-0'>
            <div className='card'>
              <p className='text-center'>Client Name</p>
              <img src={uber}></img>
            </div>
          </div>
       
          </div> <div className='row'>
          <div className='col-lg-4 p-0'>
            <div className='card'>
            <p className='text-center'>Client Name</p>
                <img src={drop}></img>
            </div>
          </div>
          <div className='col-lg-3 p-0'>
          <div className='card'>
            <p  className='text-center'>Client Name</p>
            <img src={google}></img></div>
          </div>
          <div className='col-lg-2 p-0'>
            <div className='card'>
              <p className='text-center'>Client Name</p>
              <img src={uber}></img>
            </div>
          </div>
          <div className='col-lg-3 p-0'>
            <div className='card'>
              <p className='text-center'>Client Name</p>
              <img src={amaxon}></img>
            </div>
          </div>
        </div>
        
        
        
        <div className='but'>
          <button type="submit" class="btn4 btn-primary mb-5">Try for Free</button>
        </div>
      </div>

      </section>
      <div className='container justify-content-space-between'>
        <div className='test '>
          <h2>Testimonials</h2>
        </div>
        <div className='bran'>
          <img src={Brands}></img></div>
        <p className='most text-break'>Most calendars are designed for teams.
          Slate is designed for freelancers<br></br>
          who want a simple way to plan their schedule.</p>
        <div className='avatar'>
          <p><img src={avatar}></img>
            Organize across
            Ui designer</p>

        </div>
        <div class='butt'>
          <button type="submit" class="btn5 btn-primary mb-5">More Testimonials</button>

        </div>
      </div>

      <section>
        <div className='pricing'>
          <div className='container'>
            <div className='cal'>
              <p className=' sla text-center'>Most calendars are designed for teams.
                Slate is designed for freelancers</p></div>
            <div className='cod'>
              <div class="row ">

                <div class="col-lg-4">

                  <div class="card1 ">
                    <div class="card-body">
                      <h5 class="card-title text-center">FREE</h5>
                      <p className='text-center'>Organize across all
                        apps by hand</p>
                      <div className='text-center'>
                        <h1>0<h3>   $</h3></h1>
                        <p>Per Month</p>

                      </div>
                      <p class="text-center">Pricing Features</p>
                      <p class="text-center">Pricing Features</p>
                      <p class="text-center">Pricing Features</p>
                      <p class="text-center">Pricing Features</p>
                      <p class="text-center">Pricing Features</p>

                      <div class="d-grid  " >
                        <button class="btn6 btn-primary" type="button">Order Now</button>

                      </div>


                    </div>

                  </div>

                </div>
                <div class="col-lg-4">
                  <div class="card2   bg-primary">
                    <div class="card-body">
                      <h5 class="card-title text-center">STANDARD</h5>
                      <h5>Organize across all
                        apps by hand</h5>
                      <div className='text-center'>
                        <h1>10<h3>   $</h3></h1>
                        <p>Per Month</p>

                      </div>

                      <p class="text-center">Pricing Features</p>
                      <p class="text-center">Pricing Features</p>
                      <p class="text-center">Pricing Features</p>
                      <p class="text-center">Pricing Features</p>
                      <p class="text-center">Pricing Features</p>

                    </div><div class="d-grid  " >
                      <button class="btn7 btn-light" type="button">Order Now</button>

                    </div>

                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="card3 ">
                    <div class="card-body">
                      <h5 class="card-title text-center">BUSINESS</h5>
                      <h5 className='text-center'>Organize across all
                        apps by hand</h5>
                      <div className='text-center'>
                        <h1>99<h3>   $</h3></h1>
                        <p>Per Month</p>

                      </div>
                      <p class="text-center">Pricing Features</p>
                      <p class="text-center">Pricing Features</p>
                      <p class="text-center">Pricing Features</p>
                      <p class="text-center">Pricing Features</p>
                      <p class="text-center">Pricing Features</p>
                    </div>

                    <div class="d-grid  " >
                      <button class="btn8 btn-primary" type="button">Order Now</button>

                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>
      <div className='container'>
        <div className='contact text-center'>
          <h2>Contact Us</h2>
        </div>
        <p className=' free  text-center'>Most calendars are designed for teams.
          <br></br>
          Slate is designed for freelancers</p>

        <div className='us'>
          <div className='row'>

            <div className='col-lg-6'>
              <div className='con'>
              <div className='card7 '>
                <h3 className='text-center'>Contact Us</h3>
                <form class=" g-3">

                  <div class="col for">
                    <div className='form'></div>
                    <input type="text" class="control" placeholder=" Name" aria-label=" name"></input>
                  </div>
                  <div class="col for">
                    <input type="text" class="control" placeholder=" Email" aria-label=" Email"></input>
                  </div>

                  <div class="col">
                    <div class="form-floating">
                      <textarea class="control" placeholder="Leave a comment here" id="floatingTextarea2" ></textarea>
                      <label for="floatingTextarea2">Your Message</label>
                    </div>
                  </div>




                  <div class="col-12">
                    <button type="submit" class="btn9 btn-primary">Send</button>
                  </div>
                </form></div>
                </div>
            </div>
            <div className='col-lg-6'>

              <div className='row anc'>
                <div className='col-4'>
                  <img src={icon}></img>
                  <p>6386 Spring St undefined Anchorage,
                    Georgia 12473 United States</p></div>
                <div className='col-4'>
                  <img src={vector1}></img>
                  <p>
                    (843) 555-0130</p>
                </div>
                <div className='col-4'>
                  <img src={vec}></img>
                  <p>Email</p>
                </div>

              </div>
              <img src={map} width='100%'></img>
            </div>
          </div></div></div>
      <footer className='foot'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-3'>
              <div className='paag text-center '>
                <h3>Pages</h3>
                <div className='lis '>
                  <ul class="list-unstyled ">
                    <li>
                      <a class="text-light" href="#!">Home</a>
                    </li>
                    <li>
                      <a class="text-light" href="#!">Product</a>
                    </li>
                    <li>
                      <a class="text-light" href="#!">Pricing</a>
                    </li>
                    <li>
                      <a class="text-light" href="#!">About</a>
                    </li>
                    <li>
                      <a class="text-light" href="#!">Contact</a>
                    </li>
                  </ul>
                </div></div>

            </div>
            <div className='col-lg-3'>
              <div className='tomo text-center'>
                <h3>Tomothy</h3>
                <div className='unsty'>
                  <ul class="list-unstyled ">
                    <li>
                      <a class="text-light" href="#!">Eleanor Edwards</a>
                    </li>
                    <li>
                      <a class="text-light" href="#!">Ted Robertson</a>
                    </li>
                    <li>
                      <a class="text-light" href="#!">Annette Russell</a>
                    </li>
                    <li>
                      <a class="text-light" href="#!">Jennie Mckinney</a>
                    </li>
                    <li>
                      <a class="text-light" href="#!">Gloria Richards</a>
                    </li>
                  </ul></div>

              </div>
            </div>
            <div className='col-lg-3'>
              <div className='jan text-center'>
                <h3>Jane Black</h3>
                <div className='phi'>
                  <ul class="list-unstyled  ">
                    <li>
                      <a class=" text-light" href="#!">Philip Jones</a>
                    </li>
                    <li>
                      <a class="text-light" href="#!">Product</a>
                    </li>
                    <li>
                      <a class="text-light" href="#!">Colleen Russell</a>
                    </li>
                    <li>
                      <a class="text-light" href="#!">Marvin Hawkins</a>
                    </li>
                    <li>
                      <a class="text-light" href="#!">Bruce Simmmons</a>
                    </li>
                  </ul>
                </div></div>


            </div>
            <div className='col-lg-3'>
              <div className='mock '>
                <div className='dd text-center'>

                  <img src={icon}></img>
                  <p>7480 Mockingbird Hill  </p>
                </div>
                <div className='rr text-center'>
                  <img src={vector1}></img>
                  <p>(239) 555-0108</p>
                </div>
                <div className='ss'>
                  <div className='icon'>
                    <div className='icon1'>
                      <i class="fa-brands fa-square-twitter"></i>


                    </div>
                    <div className='icon2'>
                      <i class="fa-brands fa-facebook"></i>
                    </div>
                    <div className='icon3'>
                      <i class="fa-brands fa-linkedin-in"></i>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>
      </footer>


    </div>
  )
}

export default Header
