<template>
  <div
    id="main"
    class="
      container
      mx-lg
      flex flex-col
      p-6
      md:p-18
      justify-center
      text-white
      max
    "
  >
    <img
      src="/header-image.png"
      alt="Saturday 4th September"
      class="m-auto md:w-1/2 max-w-full md:max-w-md md:mb-10"
    />

    <div class="max-w-full md:max-w-2xl text-center m-auto">
      <h1 class="text-xxl text-white mb-10">Jonny and Tara Lane's wedding</h1>

      <div class="mb-10">
        <h2 class="text-lg">Ceremony</h2>
        <p>
          Ceremony starts at 1pm on the 4th September 2021. Please be seated no
          later than 12.30pm
        </p>
      </div>

      <div class="mb-10">
        <h2 class="text-lg">Travel</h2>
        <p>
          The closest station to the Church is Kings Langley. Parking is
          available. A bus will be provided to transport you from church to
          venue.
        </p>
      </div>

      <div class="mb-10">
        <h2 class="text-lg">Gifts</h2>
        <p>
          Whilst your presence is the best present we can ask for, if you wish
          to give us a gift we would be gratfeul for any contribution to our
          honeymoon. To contribute online, click
          <a
            class="underline cursor-pointer"
            target="_blank"
            href="https://pay.collctiv.com/wedding-24704"
            >here</a
          >
        </p>
      </div>

      <div class="mb-10">
        <h2 class="text-lg">Dresscode</h2>
        <p>Jacket & Tie/Cocktail Attire</p>
      </div>

      <h2 class="text-lg mb-2">Accomodation</h2>

      <div class="mb-6">
        <h3 class="text-base">Near The Church</h3>
        <ul>
          <li>Premier Inn - Kings Langley</li>
          <li>Holiday Inn - Watford Junction</li>
          <li>Jurys Inn - Watford</li>
        </ul>
      </div>

      <div class="mb-10">
        <h3 class="text-base">Near The Reception Venue</h3>
        <ul>
          <li>Premier Inn - Hitchin Town Centre</li>
          <li>Hilton Garden Inn</li>
          <li>La Bella Vita</li>
        </ul>
      </div>

      <!-- <hr class="m-10" /> -->

      <div class="mt-16 md:mt-24 flex flex-row">
        <LazyLoadImage
          id="image"
          alt="Jonny and Tara"
          class="h-56 md:h-64 relative -rotate-15 transform md:left-22"
          :desktop-image="'/faces-2.jpg'"
        />
        <LazyLoadImage
          id="image"
          alt="Jonny and Tara"
          class="h-56 md:h-64 relative rotate-5 transform md:right-22"
          :desktop-image="'/faces-3.jpg'"
        />
      </div>

      <div class="mb-16 md:mb-24 md:mt-6 flex flex-row">
        <LazyLoadImage
          id="image"
          alt="Jonny and Tara"
          class="h-56 md:h-64 relative md:left-22 rotate-5 transform"
          :desktop-image="'/faces-4.jpg'"
        />
        <LazyLoadImage
          id="image"
          alt="Jonny and Tara"
          class="h-56 md:h-64 relative -rotate-5 transform md:right-22"
          :desktop-image="'/faces-5.jpg'"
        />
      </div>

      <div class="mb-10">
        <h2 class="text-lg mb-2">Menu choices:</h2>

        <div class="mb-10">
          <p>
            Starter <br />
            ***
          </p>

          <p>Option 1: Roasted Butternut & Sage Soup</p>
          <p>or</p>
          <p>Option 2: Plum Tomato and Mozzarella with Ciabatta</p>
        </div>

        <div class="my-10">
          <p>
            Main <br />
            ***
          </p>

          <p>Option 1: Black Truffle Mac and Cheese</p>
          <p>or</p>
          <p>Option 2: Beef Roast</p>
        </div>

        <div class="my-10">
          <p>
            Dessert <br />
            ***
          </p>

          <p>Option 1: Honeycomb Cheesecake</p>
          <p>or</p>
          <p>Option 2: Strawberry Torte</p>
        </div>
      </div>

      <div class="mb-10">
        <h2 class="text-lg">RSVP</h2>

        <p>
          Please let us know if you can come to the wedding by July 1st 2021.
        </p>
        <p>
          To RSVP for the wedding, click
          <a
            class="underline"
            target="_blank"
            href="https://forms.gle/VpGS5rLuJGMuhcGu5"
            >here</a
          >
        </p>
        <p>
          To RSVP for the evening event, click
          <a
            class="underline"
            target="_blank"
            href="https://forms.gle/RkP3TSW3f2XHF4ENA"
            >here</a
          >
        </p>
      </div>

      <h2 class="text-lg">Wedding Location</h2>

      <a
        class="mb-8 underline cursor-pointer"
        href="https://goo.gl/maps/gThMpzn3ij4nrZneA"
        target="_blank"
        >St Peter's Langleybury, Langleybury Lane, Hunton Bridge, WD4 8QQ
      </a>

      <div class="flex justify-center mb-10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2473.160759710189!2d-0.4402947482802067!3d51.69350317956626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487641cfe4af61cb%3A0x8e611e462d8b5210!2sSt.%20Paul%E2%80%99s%20Church!5e0!3m2!1sen!2sde!4v1622628940046!5m2!1sen!2sde"
          width="600"
          height="450"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>

      <hr class="m-10" />

      <div class="mb-10">
        <h2 class="text-lg">Wedding Reception</h2>
        <p>Wedding reception starts at 7.30pm.</p>
      </div>

      <div class="mb-10">
        <h2 class="text-lg">RSVP</h2>

        <p>
          Please let us know if you can come to the wedding reception by July
          1st 2021.
        </p>
        <p>
          To RSVP for the evening event, click
          <a
            class="underline"
            target="_blank"
            href="https://forms.gle/RkP3TSW3f2XHF4ENA"
            >here</a
          >
        </p>
      </div>

      <h2 class="text-lg">Evening Event Location</h2>

      <a
        class="mb-8 underline cursor-pointer"
        href="https://goo.gl/maps/Qttr7DS7dRmfhz8v5"
        target="_blank"
      >
        Offley Place Country House Hotel, Kings Walden Road, Great Offley,
        Hitchin SG5 3DX
      </a>

      <div class="flex justify-center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2460.239660196647!2d-0.3378226843965326!3d51.92958197970672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876367da3d44447%3A0x9d22d37dbc7ad0e8!2sOffley%20Place%20Country%20House%20Hotel!5e0!3m2!1sen!2sde!4v1622970774073!5m2!1sen!2sde"
          width="600"
          height="450"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
