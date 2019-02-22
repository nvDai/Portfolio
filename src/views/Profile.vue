<template>
  <section class="profile">
    <div class="box-title">
      <strong>#</strong>
      <h1>Profile</h1>
    </div>
    <div class="profile-container">
      <div class="avatar">
        <img src="./../assets/images/avatar.png" alt="Micheal's avatar"/>
      </div>
      <div class="summary">
        <p class="intro">
          <strong> Hi, there! I'm Dai</strong>
        </p>
        <p class="description">
          I'm a young designer based in Vietnam and at the momentI focus my work on ceramic, furniture, sofa and chair
          design, but anyway I'm a curious person and I love to make different things, so I also work on web and graphic
          design.
        </p>
        <p class="description">
          I'm really looking foward to hear some offers. Contact me if you want to collaborate in any web, graphics or
          UX/UI design project. I will use all my expirience to satisfy your most serious and precise requirements.
        </p>
        <div class="contact">
          <ul>
            <li>
              <div class="icon">
                <i class="fal fa-user"></i>
              </div>
              <p><span class="t-b-500">Name:</span> Nguyen Van Dai</p>
            </li>
            <li>
              <div class="icon">
                <i class="fal fa-birthday-cake"></i>
              </div>
              <p><span class="t-b-500">Date of birth:</span> January 24, 1997</p>
            </li>
          </ul>
          <ul>
            <li>
              <div class="icon">
                <i class="fal fa-map-marker-alt"></i>
              </div>
              <p><span class="t-b-500">Address:</span> Hanoi, Vietnam</p>
            </li>
            <li>
              <div class="icon">
                <i class="fal fa-envelope"></i>
              </div>
              <p><span class="t-b-500">Email:</span> nvdai2401@gmail.com</p>
            </li>
          </ul>
        </div>
        <a
          href="https://drive.google.com/file/d/1f1C5fuIpM4q-FUOOWqyBx24qDShUClI1/view?usp=sharing"
          target="_blank"
        >
          <button class="btn">
            Download resume
            <i class="fal fa-cloud-download"></i>
          </button>
        </a>

        <!--<a-->
          <!--href="#Contact"-->
        <!--&gt;-->
          <!--<button class="btn" style="margin-left: 12px">-->
            <!--Send a message-->
            <!--<i class="far fa-comment"></i>-->
          <!--</button>-->
        <!--</a>-->
      </div>

    </div>
  </section>
</template>

<script>
  export default {
    name: 'Profile',
    components: {}
  }
</script>

<style lang="scss" scoped>
  @import "./../assets/styles/css-variables";

  .profile {
    display: flex;
    flex-direction: column;
  }

  .box-title {
    margin: 0 auto 60px;
  }


  .profile-container {
    color: $color-black;
    display: grid;
    grid-template-columns: 35% 65%;
  }

  .avatar {
    text-align: center;
    img {

      border-radius: 2px;
      width: 380px;
      height: 380px;
    }
  }

  .summary {


    .intro {
      margin-bottom: 18px;
      font-size: 30px;
      font-weight: 300;
    }

    .description {
      margin-bottom: 18px;
      font-size: 1.3rem;
    }
  }

  .contact {
    display: grid;
    grid-template-columns: 50% 50%;


    li {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-bottom: 12px;

      .icon {
        border: 1px solid $color-black;
        width: 30px;
        height: 30px;
        border-radius: 2px;
        text-align: center;

        i {
          line-height: 30px;
        }
      }

      p {
        margin-left: 12px;
      }
    }
  }

  .btn {
    font-size: 1rem;
    font-weight: 600;
    border: 2px solid #222222;
    padding: 12px 18px;
    margin-top: 6px;
    background-color: transparent !important;
    color: $color-black !important;
    min-width: 120px;
    letter-spacing: 1px;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
    outline: transparent;
    text-transform: uppercase;

    &:hover {
      cursor: pointer;
      background-color: $color-black;
      color: $color-white;
    }

    &:active {
      cursor: pointer;
      background-color: $color-white;
      color: $color-black;
    }
  }
</style>

<style lang="scss" scoped>
  @import "./../assets/styles/css-variables";

  @media only screen and (max-device-width: 768px) {

    .box-title {
      margin: 0 auto 60px;
    }


    .profile-container {
      color: $color-black;
      display: flex;
      flex-direction: column;
    }

    .avatar {
      img {
        width: 100%;
        height: 100%;
      }
    }

    .summary {
      .intro {
        margin-top: 6px;
        margin-bottom: 6px;

        strong {
          font-weight: 500;
          font-size: 1.5rem;
        }
      }

      .description {
        margin-bottom: 12px;
        font-size: 1rem;
      }
    }

    .contact {
      display: flex;
      flex-direction: column;

      li {
        font-size: 1rem;
        margin-bottom: 6px;
      }
    }

    a {
      display: inline-block;
    }

    .btn {
      margin: 6px auto;
      font-size: 0.9rem;
      padding: 10px 18px;
    }
  }

  @media only screen and (device-width: 1024px) {

    .box-title {
      margin: 0 auto 60px;
    }


    .profile-container {
      display: grid;
      grid-template-columns: 40% 60%;
    }

    .avatar {
      img {
        width: 300px;
        height: 300px;;
      }
    }

    .summary {
      .intro {
        margin-bottom: 0;

        strong {
          font-weight: 500;
          font-size: 1.5rem;
        }
      }

      .description {
        margin-bottom: 6px;
        font-size: 1rem;
      }
    }

    .contact {


      li {
        font-size: 1rem;
        margin-bottom: 6px;
      }
    }

    a {
      display: inline-block;
    }

    .btn {
      margin: 6px auto 0;
      font-size: 0.9rem;
      padding: 10px 18px;
    }
  }


</style>
