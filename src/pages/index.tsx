import Head from "next/head";
import Script from "next/script";

export default function Home() {
  return (
    <>
      <Script src="https://unpkg.com/swiper@7/swiper-bundle.min.js"></Script>
      <Script type="text/javascript" src="js/script.js"></Script>

      <header>
        <div id="menu-bar" className="fas fa-bars"></div>
        <a href="#" className="logo">
          <span>V</span>iagens
        </a>

        <nav className="navbar">
          <a href="#home">Home</a>
          <a href="#book">Agenda</a>
          <a href="#packages">Pacotes</a>
          <a href="#services">Serviços</a>
          <a href="#gallery">Galeria</a>
          <a href="#review">Reviews</a>
          <a href="#contact">Contate-nos</a>
        </nav>

        <div className="icons">
          <i className="fas fa-search" id="search-btn"></i>
          <i className="fas fa-user" id="login-btn"></i>
        </div>

        <form action="" className="search-bar-container">
          <input type="search" id="search-bar" placeholder="Procurar." />
          {/* <label for="search-bar" className="fas fa-search"></label> */}
        </form>
      </header>

      <div className="login-form-container">
        <i className="fas fa-times" id="form-close"></i>

        <form action="">
          <h3>Login</h3>
          <input
            type="email"
            className="box"
            placeholder="Coloque seu e-mail"
          />
          <input
            type="password"
            className="box"
            placeholder="Digite sua senha"
          />
          <input type="submit" value="Logar" className="btn" />
          <input type="checkbox" id="remember" />
          {/* <label for="remember">Lembrar-me</label> */}
          <p>
            Esqueceu a senha? <a href="#">clique aqui</a>
          </p>
          <p>
            Não tem uma conta? <a href="#">Registre-se agora</a>
          </p>
        </form>
      </div>

      <section className="home" id="home">
        <div className="content">
          <h3>Aventure-se em Novidades!</h3>
          <p>Descubra novos lugares conosco, aventuras te esperam!</p>
          <a href="" className="btn">
            Descubra mais.
          </a>
        </div>

        <div className="controls">
          <span className="vid-btn active" data-src="/videos/vid-1.mp4"></span>
          <span className="vid-btn" data-src="/videos/vid-2.mp4"></span>
          <span className="vid-btn" data-src="/videos/vid-3.mp4"></span>
          <span className="vid-btn" data-src="/videos/vid-4.mp4"></span>
          <span className="vid-btn" data-src="/videos/vid-5.mp4"></span>
        </div>

        <div className="video-container">
          <video
            src="/videos/vid-1.mp4"
            id="video-slider"
            loop
            autoPlay
            muted
          ></video>
        </div>
      </section>

      <section className="book" id="book">
        <h1 className="heading">
          <span>a</span>
          <span>g</span>
          <span>e</span>
          <span>n</span>
          <span>d</span>
          <span>e</span>
          <span className="space"></span>
          <span>a</span>
          <span>g</span>
          <span>o</span>
          <span>r</span>
          <span>a</span>
        </h1>

        <div className="row">
          <div className="image">
            <img src="/images/book-img.svg" alt=""></img>
          </div>

          <form action="">
            <div className="inputBox">
              <h3>Para aonde?</h3>
              <input type="text" placeholder="Diga o local." />
            </div>
            <div className="inputBox">
              <h3>Quantas pessoas?</h3>
              <input type="number" placeholder="Diga quantas pessoas." />
            </div>
            <div className="inputBox">
              <h3>Ida</h3>
              <input type="date" />
            </div>
            <div className="inputBox">
              <h3>Volta</h3>
              <input type="date" />
            </div>
            <input type="submit" value="Agendar agora!" className="btn"></input>
          </form>
        </div>
      </section>

      <section className="packages" id="packages">
        <h1 className="heading">
          <span>p</span>
          <span>a</span>
          <span>c</span>
          <span>o</span>
          <span>t</span>
          <span>e</span>
          <span>s</span>
        </h1>

        <div className="box-container">
          <div className="box">
            <img src="/images/p-1.jpg" />
            <div className="content">
              <h3>
                <i className="fas fa-map-marker-alt"></i>Mumbai
              </h3>
              <p>
                lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis, named
              </p>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
              </div>
              <div className="price">
                {" "}
                R$180,00 <span>R$240,00</span>{" "}
              </div>
              <a href="#" className="btn">
                Agende agora!
              </a>
            </div>
          </div>
        </div>

        <div className="box-container">
          <div className="box">
            <img src="/images/p-2.jpg" />
            <div className="content">
              <h3>
                <i className="fas fa-map-marker-alt"></i>Hawaii
              </h3>
              <p>
                lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis, named
              </p>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
              </div>
              <div className="price">
                {" "}
                R$190,00 <span>R$260,00</span>{" "}
              </div>
              <a href="#" className="btn">
                Agende agora!
              </a>
            </div>
          </div>
        </div>

        <div className="box-container">
          <div className="box">
            <img src="/images/p-3.jpg" />
            <div className="content">
              <h3>
                <i className="fas fa-map-marker-alt"></i>Sydney
              </h3>
              <p>
                lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis, named
              </p>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
              </div>
              <div className="price">
                {" "}
                R$130,00 <span>R$190,00</span>{" "}
              </div>
              <a href="#" className="btn">
                Agende agora!
              </a>
            </div>
          </div>
        </div>

        <div className="box-container">
          <div className="box">
            <img src="/images/p-4.jpg" />
            <div className="content">
              <h3>
                <i className="fas fa-map-marker-alt"></i>Paris
              </h3>
              <p>
                lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis, named
              </p>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <div className="price">
                {" "}
                R$280,00 <span>R$370,00</span>{" "}
              </div>
              <a href="#" className="btn">
                Agende agora!
              </a>
            </div>
          </div>
        </div>

        <div className="box-container">
          <div className="box">
            <img src="/images/p-5.jpg" />
            <div className="content">
              <h3>
                <i className="fas fa-map-marker-alt"></i>Tokyo
              </h3>
              <p>
                lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis, named
              </p>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <div className="price">
                {" "}
                R$390,00 <span>R$545,00</span>{" "}
              </div>
              <a href="#" className="btn">
                Agende agora!
              </a>
            </div>
          </div>
        </div>

        <div className="box-container">
          <div className="box">
            <img src="/images/p-6.jpg" />
            <div className="content">
              <h3>
                <i className="fas fa-map-marker-alt"></i>Egito
              </h3>
              <p>
                lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis, named
              </p>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
              </div>
              <div className="price">
                {" "}
                R$125,00 <span>R$170,00</span>{" "}
              </div>
              <a href="#" className="btn">
                Agende agora!
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="services" id="services">
        <h1 className="heading">
          <span>s</span>
          <span>e</span>
          <span>r</span>
          <span>v</span>
          <span>i</span>
          <span>ç</span>
          <span>o</span>
          <span>s</span>
        </h1>

        <div className="box-container">
          <div className="box">
            <i className="fas fa-hotel"></i>
            <h3>Hotéis Confortáveis</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
              neque fugit natus rem architecto explicabo distinctio delectus
              repellendus! Omnis cumque nisi dignissimos nostrum iusto adipisci
              deserunt aut esse autem vero.
            </p>
          </div>

          <div className="box">
            <i className="fas fa-utensils"></i>
            <h3>Comidas e Bebidas</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
              neque fugit natus rem architecto explicabo distinctio delectus
              repellendus! Omnis cumque nisi dignissimos nostrum iusto adipisci
              deserunt aut esse autem vero.
            </p>
          </div>

          <div className="box">
            <i className="fas fa-bullhorn"></i>
            <h3>Guias Seguros</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
              neque fugit natus rem architecto explicabo distinctio delectus
              repellendus! Omnis cumque nisi dignissimos nostrum iusto adipisci
              deserunt aut esse autem vero.
            </p>
          </div>

          <div className="box">
            <i className="fas fa-globe-asia"></i>
            <h3>Através do Mundo</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
              neque fugit natus rem architecto explicabo distinctio delectus
              repellendus! Omnis cumque nisi dignissimos nostrum iusto adipisci
              deserunt aut esse autem vero.
            </p>
          </div>

          <div className="box">
            <i className="fas fa-plane"></i>
            <h3>Viagens Rápidas</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
              neque fugit natus rem architecto explicabo distinctio delectus
              repellendus! Omnis cumque nisi dignissimos nostrum iusto adipisci
              deserunt aut esse autem vero.
            </p>
          </div>

          <div className="box">
            <i className="fas fa-hiking"></i>
            <h3>Aventuras</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
              neque fugit natus rem architecto explicabo distinctio delectus
              repellendus! Omnis cumque nisi dignissimos nostrum iusto adipisci
              deserunt aut esse autem vero.
            </p>
          </div>
        </div>
      </section>

      <section className="gallery" id="gallery">
        <h1 className="heading">
          <span>g</span>
          <span>a</span>
          <span>l</span>
          <span>e</span>
          <span>r</span>
          <span>i</span>
          <span>a</span>
        </h1>

        <div className="box-container">
          <div className="box">
            <img src="/images/g-1.jpg" />
            <div className="content">
              <h3>Lugares Maravilhosos</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum sit
                perferendis, deserunt fugiat eos accusantium delectus aliquid
                quisquam fugit mollitia laudantium rerum magnam, vel autem
                debitis veniam optio saepe quibusdam.
              </p>
              <a href="#" className="btn">
                Ver mais
              </a>
            </div>
          </div>

          <div className="box">
            <img src="/images/g-2.jpg" />
            <div className="content">
              <h3>Lugares Maravilhosos</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum sit
                perferendis, deserunt fugiat eos accusantium delectus aliquid
                quisquam fugit mollitia laudantium rerum magnam, vel autem
                debitis veniam optio saepe quibusdam.
              </p>
              <a href="#" className="btn">
                Ver mais
              </a>
            </div>
          </div>

          <div className="box">
            <img src="/images/g-3.jpg" />
            <div className="content">
              <h3>Lugares Maravilhosos</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum sit
                perferendis, deserunt fugiat eos accusantium delectus aliquid
                quisquam fugit mollitia laudantium rerum magnam, vel autem
                debitis veniam optio saepe quibusdam.
              </p>
              <a href="#" className="btn">
                Ver mais
              </a>
            </div>
          </div>

          <div className="box">
            <img src="/images/g-4.jpg" />
            <div className="content">
              <h3>Lugares Maravilhosos</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum sit
                perferendis, deserunt fugiat eos accusantium delectus aliquid
                quisquam fugit mollitia laudantium rerum magnam, vel autem
                debitis veniam optio saepe quibusdam.
              </p>
              <a href="#" className="btn">
                Ver mais
              </a>
            </div>
          </div>

          <div className="box">
            <img src="/images/g-5.jpg" />
            <div className="content">
              <h3>Lugares Maravilhosos</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum sit
                perferendis, deserunt fugiat eos accusantium delectus aliquid
                quisquam fugit mollitia laudantium rerum magnam, vel autem
                debitis veniam optio saepe quibusdam.
              </p>
              <a href="#" className="btn">
                Ver mais
              </a>
            </div>
          </div>

          <div className="box">
            <img src="/images/g-6.jpg" />
            <div className="content">
              <h3>Lugares Maravilhosos</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum sit
                perferendis, deserunt fugiat eos accusantium delectus aliquid
                quisquam fugit mollitia laudantium rerum magnam, vel autem
                debitis veniam optio saepe quibusdam.
              </p>
              <a href="#" className="btn">
                Ver mais
              </a>
            </div>
          </div>

          <div className="box">
            <img src="/images/g-7.jpg" />
            <div className="content">
              <h3>Lugares Maravilhosos</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum sit
                perferendis, deserunt fugiat eos accusantium delectus aliquid
                quisquam fugit mollitia laudantium rerum magnam, vel autem
                debitis veniam optio saepe quibusdam.
              </p>
              <a href="#" className="btn">
                Ver mais
              </a>
            </div>
          </div>

          <div className="box">
            <img src="/images/g-8.jpg" />
            <div className="content">
              <h3>Lugares Maravilhosos</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum sit
                perferendis, deserunt fugiat eos accusantium delectus aliquid
                quisquam fugit mollitia laudantium rerum magnam, vel autem
                debitis veniam optio saepe quibusdam.
              </p>
              <a href="#" className="btn">
                Ver mais
              </a>
            </div>
          </div>

          <div className="box">
            <img src="/images/g-9.jpg" />
            <div className="content">
              <h3>Lugares Maravilhosos</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum sit
                perferendis, deserunt fugiat eos accusantium delectus aliquid
                quisquam fugit mollitia laudantium rerum magnam, vel autem
                debitis veniam optio saepe quibusdam.
              </p>
              <a href="#" className="btn">
                Ver mais
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="review" id="review">
        <h1 className="heading">
          <span>a</span>
          <span>v</span>
          <span>a</span>
          <span>l</span>
          <span>i</span>
          <span>a</span>
          <span>ç</span>
          <span>õ</span>
          <span>e</span>
          <span>s</span>
        </h1>

        <div className="swiper-container review-slider">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="box">
                <img src="/images/pic1.png" />
                <h3>Jaquelina Dantas</h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad
                  est consequatur explicabo eveniet dolore sequi odit a omnis
                  pariatur tempora, quis unde reiciendis hic delectus excepturi
                  fugiat vero tempore repellat!
                </p>
                <div className="stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="far fa-star"></i>
                </div>
              </div>
            </div>

            <div className="swiper-slide">
              <div className="box">
                <img src="/images/pic2.png" />
                <h3>Myke Wasalski</h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad
                  est consequatur explicabo eveniet dolore sequi odit a omnis
                  pariatur tempora, quis unde reiciendis hic delectus excepturi
                  fugiat vero tempore repellat!
                </p>
                <div className="stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </div>
            </div>

            <div className="swiper-slide">
              <div className="box">
                <img src="/images/pic3.png" />
                <h3>Mirian Japoneka</h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad
                  est consequatur explicabo eveniet dolore sequi odit a omnis
                  pariatur tempora, quis unde reiciendis hic delectus excepturi
                  fugiat vero tempore repellat!
                </p>
                <div className="stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="far fa-star"></i>
                </div>
              </div>
            </div>

            <div className="swiper-slide">
              <div className="box">
                <img src="/images/pic4.png" />
                <h3>Will C Ronaldo</h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad
                  est consequatur explicabo eveniet dolore sequi odit a omnis
                  pariatur tempora, quis unde reiciendis hic delectus excepturi
                  fugiat vero tempore repellat!
                </p>
                <div className="stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <h1 className="heading">
          <span>c</span>
          <span>o</span>
          <span>n</span>
          <span>t</span>
          <span>a</span>
          <span>t</span>
          <span>e</span>
          <span>-</span>
          <span>n</span>
          <span>o</span>
          <span>s</span>
        </h1>

        <div className="row">
          <div className="image">
            <img src="/images/contact-img.svg" />
          </div>

          <form action="">
            <div className="inputBox">
              <input type="text" placeholder="Nome" />
              <input type="email" placeholder="E-mail" />
            </div>
            <div className="inputBox">
              <input type="number" placeholder="Telefone" />
              <input type="text" placeholder="Título" />
            </div>
            <textarea
              placeholder="Mensagem"
              name=""
              id=""
              cols="30"
              rows="10"
            ></textarea>
            <input type="submit" value="Enviar mensagem" className="btn" />
          </form>
        </div>
      </section>

      <section className="brand-container">
        <div className="swiper-container brand-slider">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <img src="/images/1.jpg" />
            </div>
            <div className="swiper-slide">
              <img src="/images/2.jpg" />
            </div>
            <div className="swiper-slide">
              <img src="/images/3.jpg" />
            </div>
            <div className="swiper-slide">
              <img src="/images/4.jpg" />
            </div>
            <div className="swiper-slide">
              <img src="/images/5.jpg" />
            </div>
            <div className="swiper-slide">
              <img src="/images/6.jpg" />
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="box-container">
          <div className="box">
            <h3>Sobre Nós</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis illo doloremque doloribus autem. Quis ullam beatae
              sapiente molestias incidunt consequuntur velit, cumque repudiandae
            </p>
          </div>

          <div className="box">
            <h3>Nossas Filiais</h3>
            <a href="#">Distrito Federal</a>
            <a href="#">Goiás</a>
            <a href="#">São Paulo</a>
            <a href="#">Manaus</a>
            <a href="#">Rio de Janeiro</a>
          </div>

          <div className="box">
            <h3>Links Rápidos</h3>
            <a href="#home">Home</a>
            <a href="#book">Agenda</a>
            <a href="#packages">Pacotes</a>
            <a href="#services">Serviços</a>
            <a href="#gallery">Galeria</a>
            <a href="#review">Avaliações</a>
          </div>

          <div className="box">
            <h3>Siga-nos</h3>
            <a href="#">Facebook</a>
            <a href="#">Instagram</a>
            <a href="#packages">Twitter</a>
            <a href="#services">LinkedIn</a>
          </div>
        </div>
        <h1 className="credit">
          Criado por <span>Daniel Mota</span> | Todos os direitos reservados.
        </h1>
      </footer>
    </>
  );
}
