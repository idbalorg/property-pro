import React from "react";
import PageNav from "../components/PageNav";

function HomePage() {
  return (
    <main>
      <PageNav />
      <h1>
        {" "}
        Helping you find Your dream home <br />
        Property Pro Lite is a platform where people can create and/or search
        properties for sale or rent.
      </h1>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id
        maximus dolor. Phasellus a justo tincidunt, mattis lorem at, imperdiet
        nisi. Integer ac magna in purus porta scelerisque nec vel elit.
        Phasellus at nibh ultrices, ultricies risus ut, imperdiet justo.
        Maecenas tempor mi luctus leo sollicitudin dictum. Donec in dui et leo
        scelerisque porttitor. Maecenas suscipit pretium metus vitae fermentum.
        Nunc quis risus eget massa maximus rhoncus.
      </p>
    </main>
  );
}

export default HomePage;
