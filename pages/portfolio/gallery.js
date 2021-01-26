import Link from "next/link";

const gallery = () => {

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
          <h1 className="header-txt">📷 GALLERY 📷</h1>
        </div>
        <table class="text-center mt-5">
    <tr>
      <td>
        <figure class="figure">
          <img src="https://i.pinimg.com/564x/d8/cb/be/d8cbbe8d0fd3b5a1bfd44a2eac8f3c41.jpg"
            class="figure-img img-fluid rounded " width="50%"/>
          <figcaption class="figure-caption"><i> Driving with dad in the evening.</i></figcaption>
        </figure>
      </td>
      <td>
        <figure class="figure">
          <img src="https://i.pinimg.com/564x/17/c3/74/17c3749a6fc64ebf6188c1446c5bd1bb.jpg"
            class="figure-img img-fluid rounded" width="50%"/>
          <figcaption class="figure-caption"><i> Waking up late in the summer.</i></figcaption>
        </figure>
      </td>
      <td>
        <figure class="figure">
          <img src="https://i.pinimg.com/564x/d2/ad/6b/d2ad6bb905b1f8c48f562a0c78321241.jpg"
            class="figure-img img-fluid rounded" width="50%"/>
          <figcaption class="figure-caption"><i>After friends back them home.</i></figcaption>
        </figure>
      </td>
    </tr>
    <tr>
      <td>
        <figure class="figure">
          <img src="https://i.pinimg.com/564x/be/03/36/be0336880c455af3260d4ad6059ccad8.jpg"
            class="figure-img img-fluid rounded" width="50%"/>
          <figcaption class="figure-caption"><i>Reading and listening lofi in the morning.</i></figcaption>
        </figure>
      </td>
      <td>
        <figure class="figure">
          <img src="https://i.pinimg.com/564x/fd/76/a7/fd76a703c02008f41f66c7c112113fff.jpg"
            class="figure-img img-fluid rounded" width="50%"/>
          <figcaption class="figure-caption"><i>My parent go out and i just be alone.</i></figcaption>
        </figure>
      </td>
      <td>
        <figure class="figure">
          <img src="https://i.pinimg.com/564x/2b/a1/18/2ba118ba65a4e1f8e4a6d42531eff76b.jpg"
            class="figure-img img-fluid rounded" width="50%"/>
          <figcaption class="figure-caption"><i>Having launch at the market without friend.</i></figcaption>
        </figure>
      </td>
    </tr>
    <tr>
      <td>
        <figure class="figure">
          <img src="https://i.pinimg.com/564x/72/2d/d5/722dd57e49e153e2292a94b7f36ed527.jpg"
            class="figure-img img-fluid rounded" width="50%"/>
          <figcaption class="figure-caption"><i>Dinner with some special that's another me.</i></figcaption>
        </figure>
      </td>
      <td>
        <figure class="figure">
          <img src="https://i.pinimg.com/564x/f1/bd/30/f1bd3004b0df1e291cff35dc3c18010b.jpg"
            class="figure-img img-fluid rounded" width="50%"/>
          <figcaption class="figure-caption"><i>6 pm. not good to nap but today i'm exhausted.</i></figcaption>
        </figure>
      </td>
      <td>
        <figure class="figure">
          <img src="https://i.pinimg.com/564x/de/e5/e0/dee5e0b1c44963860319bc88a0efbc44.jpg"
            class="figure-img img-fluid rounded" width="50%"/>
          <figcaption class="figure-caption"><i>1 of 365 is fulfill day when be with you.</i></figcaption>
        </figure>
      </td>
    </tr>
  </table>
      </>
    );
};

export default gallery;
