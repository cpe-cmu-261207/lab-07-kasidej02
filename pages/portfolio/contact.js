import Link from "next/link";

const contact = () => {

    return (
      <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href={`/portfolio`}>THEKHUNO</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarColor03">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <a class="nav-link" href={`/post`}>POST
        </a>
      </li>
      <li class="nav-item ">
        <a class="nav-link" href={`/GPAcalculator`}>GPA calculator</a>
      </li>
      </ul>
  </div>
</nav>
        <div className="header">
          <h1 className="header-txt">📞 CONTACT 📞</h1>
        </div>
        <div class="container mt-3 mb-3">
    <form>
      <div class="form-group">
        <label for="">Subject</label>
        <input type="text" class="form-control" id="subject" placeholder="Topic about work"/>
      </div>
      <div class="form-group">
        <label for="">Message</label>
        <textarea class="form-control" id="message" rows="3" placeholder="Text here..."></textarea>
      </div>

      <div class="form-group row">
        <div class="col">
          <label for="">Firstname</label>
          <input type="text" class="form-control" placeholder="Adam"/>
        </div>
        <div class="col">
          <label for="">Lastname</label>
          <input type="text" class="form-control" placeholder="Smith"/>
        </div>
      </div>
      <div class="form-group">
        <div class="form-group">
          <label for="">Gender</label>
          <div class="col row">
            <span class="mr-3">
              <div class="form-check">
                <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked/>
                <label class="form-check-label" for="gridRadios1">
                  Male
                </label>
              </div>
            </span>
            <div class="form-check">
              <span class="mr-3">
                <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2"/>
                <label class="form-check-label" for="gridRadios2">
                  Female
                </label> 
                </span>
            </div>
          </div>
        </div>
      </div>


      <div class="form-group">
        <label for="">Phone</label>
        <input type="text" class="form-control" id="subject" placeholder="(+66)"/>
      </div>

      <div class="form-group">
        <label for="">Email</label>
        <input type="email" class="form-control" id="email" placeholder="starfisher@Khunoplanet.com"/>
      </div>

      <div class="text-center">
        <button type="button" class="btn btn-primary">Submit</button>
      </div>
    </form>
  </div>
      </>
    );
};

export default contact;
