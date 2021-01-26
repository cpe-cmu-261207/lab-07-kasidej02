import Link from "next/link";

const Portfolio = () => {

    return (
      <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href={`./portfolio`}>THEKHUNO</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarColor03">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <a class="nav-link" href={`./post`}>POST
        </a>
      </li>
      <li class="nav-item ">
        <a class="nav-link" href={`./GPAcalculator`}>GPA calculator</a>
      </li>
      </ul>
  </div>
</nav>

  <div class="jumbotron"> 
  <div className="inner-jumbotron">
  <h1 class="display-3">KHUNOPLANET</h1>
  <p class="lead"><i>"from simple starfisher to simple warm planet."</i></p>
  <p class="lead">
    <a class="btn btn-primary btn-lg" href={`/portfolio/gallery`} role="button">📷 Gallery</a> <a class="btn btn-primary btn-lg" href={`/portfolio/contact`} role="button">📞 CONTACT</a>
  </p>
  </div> 
</div>

    <div className="port-content">
      <div className="card">
      <h3 id="font"><span class="badge badge-pill badge-info">Personal information</span></h3>
              <p class="card-text">
              <h6>
                <i>Kasidej Kammool (Khun)</i>
                </h6>
                <p>
                  Age : 19 <br/>
                  DD/MM/YY : 02-March-2001 <br/>
                  Nationality : Thai
                </p>
                </p>
      </div>
      <div className="card">
      <h3 id="font"><span class="badge badge-pill badge-info">Education</span></h3>
              <p class="card-text">
                Primary education : Pattanawit School <br/>
                Secondary education : Yupparaj College (YRC) <br/>
                Higher education : CMU
              </p>
      </div>
      <div className="card">
      <h3 id="font"><span class="badge badge-pill badge-info">Experience</span></h3>
              <p class="card-text">
              <ul>
                <li>Graphic Design</li>
                <li> Singing Contest</li>
                <li>Freestyle dance and coverdance</li>
              </ul>
              </p>
      </div>

      <div className="card">
      <h3 id="font"><span class="badge badge-pill badge-info">Talent&Hobby</span></h3>
              <p class="card-text">
              <ul>
                <li>Graphic Design</li>
                <li>Dancing</li>
                <li>Photography</li>
                <li>Watch movie</li>
              </ul>
              </p>
      </div>
      </div>

      </>
    );
};

export default Portfolio;
