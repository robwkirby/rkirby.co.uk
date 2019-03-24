<template>
  <div>
    <section class="cv">
      <div class="row">
        <div class="col-12 col-lg-4 col-xxl">
          <div class="cv__aside">

            <div class="cv__title">
              <h1>Rob Kirby</h1>
              <h2>Front end Developer</h2>
            </div>

            <section class="cv__section">
              <h2>About</h2>
              <p>I'm a front end developer with 6 years commercial experience working with high profile digital agencies in the North West.</p>
              <p>I'm interested in modular and performant front end development, and crafting engaging user experiences.</p>
            </section>

            <section class="cv__section">
              <h2>Contact</h2>
              <a href="mailto:rob@rkirby.co.uk">rob@rkirby.co.uk</a>
            </section>

            <section class="cv__section" v-if="links">
              <h2>Links</h2>
              <ul class="cv__links">
                <li v-for="link in links" :key="link">
                    <a :href="link.url">
                      <svg v-if="link.icon == 'linkedin'" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M13.632 13.635h-2.37V9.922c0-.886-.018-2.025-1.234-2.025-1.235 0-1.424.964-1.424 1.96v3.778h-2.37V6H8.51v1.04h.03c.318-.6 1.092-1.233 2.247-1.233 2.4 0 2.845 1.58 2.845 3.637v4.188zM3.558 4.955c-.762 0-1.376-.617-1.376-1.377 0-.758.614-1.375 1.376-1.375.76 0 1.376.617 1.376 1.375 0 .76-.617 1.377-1.376 1.377zm1.188 8.68H2.37V6h2.376v7.635zM14.816 0H1.18C.528 0 0 .516 0 1.153v13.694C0 15.484.528 16 1.18 16h13.635c.652 0 1.185-.516 1.185-1.153V1.153C16 .516 15.467 0 14.815 0z" fill-rule="nonzero"/></svg>
                      <svg v-if="link.icon == 'codepen'" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M15.988 5.443c-.004-.02-.007-.04-.012-.058l-.01-.033c-.006-.017-.012-.034-.02-.05-.003-.012-.01-.023-.014-.034l-.023-.045-.02-.032-.03-.04-.03-.03-.04-.03-.03-.02-.04-.03-.03-.02-.01-.01L8.38.12c-.23-.154-.53-.154-.76 0L.302 4.99.292 5l-.03.023-.04.032-.025.027-.034.037-.024.03-.03.04c-.01.01-.02.02-.02.03l-.03.04-.01.04c-.01.01-.01.03-.02.05l-.01.03c-.01.02-.01.04-.01.06v.03C0 5.5 0 5.53 0 5.56v4.875c0 .03.002.06.006.09l.007.03c.003.02.006.04.013.058l.01.033c.006.018.01.035.018.05l.015.033c0 .01.01.03.02.04l.02.03c.01.01.02.03.03.04l.02.03.03.03c.01.01.01.02.02.02l.04.03.03.02.01.01 7.31 4.88c.11.08.25.11.38.11s.26-.04.38-.12L15.68 11l.01-.01.03-.022.04-.03.03-.026.035-.037.024-.03.03-.04.02-.032.02-.046.01-.036.02-.05.01-.03.02-.05v-5c0-.03 0-.06-.01-.09l-.01-.03zM8 9.626L5.568 8 8 6.374 10.432 8 8 9.626zM7.312 5.18l-2.98 1.993-2.406-1.61 5.386-3.59V5.18zM3.095 8l-1.72 1.15v-2.3L3.095 8zm1.237.828l2.98 1.993v3.21l-5.386-3.59 2.406-1.61zm4.355 1.993l2.98-1.99 2.407 1.61-5.387 3.59v-3.2zM12.905 8l1.72-1.15v2.3L12.905 8zm-1.237-.827L8.688 5.18V1.97l5.386 3.59-2.406 1.61z" fill-rule="nonzero"/></svg>
                      <svg v-if="link.icon == 'github'" aria-labelledby="title" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><title>GitHub icon</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>                                
                      {{link.text}}
                    </a>
                </li>
              </ul>
            </section>
            <section class="cv__section">
              <h2>Certifications</h2>
              <div class="cv__certification">
                <img src="~/assets/images/badges-2-03.png" alt="Umbraco Certified Professional" title="Umbraco Certified Professional">
              </div>
            </section>
          </div>
        </div>
        <div class="col-12 col-lg-8 col-xxl">
          <div class="cv__body">
            <a href="/uploads/rkirby-cv.pdf" class="cv__download cv__download--lg btn btn--outline">
              Download
            </a>
            <section class="cv__section" v-if="tools">
              <h2>Tools</h2>
              <p>{{tools.join(", ")}}</p>
            </section>

            <section class="cv__section" v-if="skills">
              <h2>Skills</h2>
              <p>{{skills.join(", ")}}</p>
            </section>

            <section class="cv__section cv__section--work" v-if="links">
              <h2>Work Experience</h2>
              <div class="cv__list">
                <div v-for="job in workExperience" :key="job" class="cv__list-item">
                  <time :datetime="`${job.start}/${job.end}`">{{job.start}} - {{job.end}}</time>
                  <h2>{{job.title}}, <strong>{{job.company}}</strong></h2>
                  <p>{{job.description}}</p>
                </div>
              </div>
            </section>

            <section class="cv__section">
              <h2>Education</h2>
              <div class="cv__list">
                <div v-for="item in education" :key="item" class="cv__list-item">
                  <time :datetime="`${item.start}/${item.end}`">{{item.start}} - {{item.end}}</time>
                  <h2>{{item.title}}</h2>
                  <p>{{item.description}}</p>
                </div>
              </div>
            </section>

          </div>
        </div>
      </div>
    </section>
    <div>
      <a href="/uploads/rkirby-cv.pdf" class="cv__download btn btn--outline">
        Download
      </a>
    </div>
  </div>
</template>

<script>

export default {
  props: [
    "about",
    "links",
    "tools",
    "skills",
    "workExperience",
    "education",
    "certifications"
  ]
}
</script>

<style lang="scss" scoped>
  .cv {
    background: #FFF;
    box-shadow: 0px 0px 50px -10px rgba(#000, 0.25);

    &__title {
      display: block;
      margin-bottom: 60px;
      h1 {
        font-size: 4.4rem;
        margin: 0;
      }
      h2 {
        font-size: 2.05rem;
        margin: 0;
        color: #7a7a7a;
        font-weight: 600;
      }
    }



    &__section {
      margin-bottom: 60px;
      p, a {
        font-size: 1.8rem;
        line-height: 2.8rem;
      }
      h2 {
        font-size: 3rem;
        margin-bottom: 4rem;
      }
    }

    &__aside {
      height: 100%;
      padding: 20px 20px 20px 20px;
      background-color: #eeeeee;
      position: relative;
    }

    &__body {
      padding: 20px 20px 100px 20px;
      .download {
        position: absolute;
        top: 60px;
        right: 60px;
      }
    }

    &__download {
      &--lg {
        display: none;
      }
    }

    &__list {
      &-item {
        position: relative;
        padding: 0px 20px 40px;
        &:before, &:after {
          content: "";
          display: block;
          position: absolute;
          left: 0px;
          top: 5px;
        }
        &:before {
          height: 100%;
          width: 2px;
          background: red;
        }
        &:after {
          height: 14px;
          width: 14px;
          background: #FFF;
          border: 2px solid red;
          border-radius: 50%;
          margin-left: -(14px/2) + 1;
          transform: scale(1);
          transition: all .3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        &:last-of-type {
          &:before {
            display: none;
          }
        }
        &:hover {
          &:after {
            transform: scale(1.3);
          }
        }
        time {
          font-family: "Gilroy";
          color: $primary;
          font-size: 1.8rem;
          font-weight: 600;
          display: block;
          margin-bottom: 8px;
        }
        h2 {
          font-size: 2rem;
          line-height: 2.8rem;
          font-family: "Lato";
          font-weight: 400;
          margin: 0 0 40px;
        }
      }
      p {
        font-size: 1.8rem;
        // line-height: 38px;
        color: #696969;
        padding: 0;
        margin: 0;
      }
    }

    &__links {
      list-style: none;
      margin: 0;
      padding: 0;
      li {
        padding: 5px 0px;
        margin-bottom: 10px;
      }
      a {
        padding-left: 40px;
        position: relative;
        svg {
          position: absolute;
          left: 0;
          top: 50%;
          opacity: 0.5;
          width: 25px;
          transform: translateY(-50%);
        }
      }
    }

    &__certification {
      img {
        filter: grayscale(1) contrast(1.2);
        transition: .3s filter ease-in-out;
        &:hover {
          filter: grayscale(0)
        }
      }
    }

  }

  @media (min-width: 968px) {
    .cv {
      transform: translateZ(20px);
      &__title {
        position: absolute;
        top: 60px;
        left: 60px;
        width: 100%;
        margin-bottom: 0;
        h1 {
          font-size: 6.7rem;
          margin: 0;
        }
        h2 {
          font-size: 3.2rem;
        }
      }
      &__section {
        p, a {
          font-size: 2.8rem;
          line-height: 3.8rem;
          .cv__aside & {
            font-size: 2.4rem;
            line-height: 3.4rem;
          }
        }
      }
      &__aside {
        padding: 220px 40px 40px 40px;
      }
      &__body {
        padding: 220px 40px 220px 40px;
      }
      &__download {
        display: block;
        max-width: 300px;
        position: absolute;
        top: 60px;
        right: 60px;
      }
      &__list {
        &-item {
          padding: 0px 80px 40px 250px;
          &:before, &:after {
            left: 190px;
            top: 5px;
          }
          &:before {
            height: 100%;
            width: 2px;
          }
          time {
            font-family: "Gilroy";
            color: $primary;
            font-size: 2.6rem;
            font-weight: 600;
            display: block;
            position: absolute;
            left: 0;
            top: 0px;
            margin-bottom: 0;
          }
          h2 {
            font-size: 2.8rem;
            
          }
        }
        p {
          font-size: 2.4rem;
        }
      }
      &__links {
        font-size: 22px;
        padding: 0;
      }
    }
  }
  @media (min-width: 1600px) {
    .cv {
      &__aside {
        padding: 220px 40px 40px 60px;
      }
      &__body {
        min-width: 1100px;
        padding: 220px 60px 220px 40px;
      }
    }
  }
</style>

