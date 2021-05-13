const citanje = document.querySelector("#citanje");
const gridAktivnosti = document.querySelector(".gridPdfDownload");
citanje.addEventListener("click", () => {
  gridAktivnosti.innerHTML = `
    <div class="downloadSinglePdf">
    <h2>Wiggly Wordsearch</h2>
    <p>Uocite reci u ovoj zabavnoj ukrstenici</p>
    <button><a href="https://s3-eu-west-1.amazonaws.com/orchardtoys/fs/pdf/wiggly_wordsearch_activity_sheet.pdf" target="_blank">Preuzmi</a></button>
  </div>

  <div class="downloadSinglePdf">
  <h2>Henry Comprehension</h2>
  <p>Procitaj tekst i odgovori na pitanje</p>
  <button><a href="https://s3-eu-west-1.amazonaws.com/orchardtoys/fs/pdf/comprehension_all_about_henry_activity_sheet.pdf" >Preuzmi</a></button>
</div>

    <div class="downloadSinglePdf">
    <h2> Where Are They?</h2>
    <p>Gde je zivotinja u odnosu na predmet?</p>
    <button><a href="https://s3-eu-west-1.amazonaws.com/orchardtoys/fs/pdf/where_are_they_activity_sheet_260121.pdf">Preuzmi</a></button>
  </div>

    <div class="downloadSinglePdf">
    <h2>Find the Rhymes</h2>
    <p>Možete li pronaći 30 rima skrivenih na ovoj slici?</p>
    <button><a href="https://s3-eu-west-1.amazonaws.com/orchardtoys/fs/pdf/find_the_rhyme_activity_sheet_amended.pdf">Preuzmi</a></button>
  </div>

  <div class="downloadSinglePdf">
  <h2>Dino Comprehension</h2>
  <p>Pročitajte tekst, a zatim odgovorite na pitanja</p>
  <button><a href="https://s3-eu-west-1.amazonaws.com/orchardtoys/fs/pdf/comprehension_dinosaur_facts_activity_sheet.pdf">Preuzmi</a></button>
</div>


<div class="downloadSinglePdf">
<h2>Colour and Write</h2>
<p>Obojite čudovišta, a zatim napišite kratku priču</p>
<button><a href="https://s3-eu-west-1.amazonaws.com/orchardtoys/fs/pdf/colour_and_write_mean_monsters_activity_sheet_.pdf">Preuzmi</a></button>
</div>



<div class="downloadSinglePdf">
<h2>First Letters M-Z</h2>
<p>Možete li napisati prvo slovo svake od ovih reči?</p>
<button><a href="https://s3-eu-west-1.amazonaws.com/orchardtoys/fs/pdf/first_letters_m-z_activity_sheet.pdf">Preuzmi</a></button>
</div>
 
    `;
});

const matematika = document.querySelector("#matematika");
matematika.addEventListener("click", () => {
  gridAktivnosti.innerHTML = `
    <div class="downloadSinglePdf">
    <h2>Lily Pad Maths</h2>
    <p>Pomozite žabi da preskoči jastučiće ljiljana tako što će sletjeti samo na parne brojeve</p>
    <button><a href="https://s3-eu-west-1.amazonaws.com/orchardtoys/fs/pdf/lily_pad_maths_activity_sheet.pdf" target="_blank">Preuzmi</a></button>
  </div>
  
    <div class="downloadSinglePdf">
    <h2>Colour by Subtraction</h2>
    <p>Rešite matematičke zadatke da biste obojili sliku</p>
    <button><a href="https://s3-eu-west-1.amazonaws.com/orchardtoys/fs/pdf/colour_by_subtraction_dog_activity_sheet.pdf" target="_blank">Preuzmi</a></button>
</div>
    <div class="downloadSinglePdf">
    <h2>Football Shirt Sums</h2>
    <p>Napiši odgovor na zadatak iz matematike na dresu</p>
    <button><a href="https://s3-eu-west-1.amazonaws.com/orchardtoys/fs/pdf/football_shirt_sums_activity_sheet.pdf" target="_blank">Preuzmi</a></button>
</div>
    <div class="downloadSinglePdf">
    <h2>Snowball Counting
    </h2>
    <p>Povežite grudve na rukavicu sa brojem na snežnom čoveku</p>
    <button><a href="https://s3-eu-west-1.amazonaws.com/orchardtoys/fs/pdf/snowball_counting_activity_sheet.pdf" target="_blank">Preuzmi</a></button>
  </div>

  <div class="downloadSinglePdf">
    <h2>Penguin Counting
    </h2>
    <p>Možete li staviti brojeve u red?</p>
    <button><a href="https://s3-eu-west-1.amazonaws.com/orchardtoys/fs/pdf/penguin_numbers_activity_sheet_amended.pdf" target="_blank">Preuzmi</a></button>
  </div>

  <div class="downloadSinglePdf">
    <h2>Count the Snowflakes
    </h2>
    <p>pronađite brojeve u oblacima, pa ih saberite</p>
    <button><a href="https://s3-eu-west-1.amazonaws.com/orchardtoys/fs/pdf/count_the_snowflakes_activity_sheet_amended.pdf" target="_blank">Preuzmi</a></button>
  </div>


  <div class="downloadSinglePdf">
    <h2>How Many Passengers
    </h2>
    <p>Rešite sume da biste saznali koliko je putnika u autobusu</p>
    <button><a href="https://s3-eu-west-1.amazonaws.com/orchardtoys/fs/pdf/how_many_passengers_activity_sheet.pdf" target="_blank">Preuzmi</a></button>
  </div>
  `;
});

const puzzle = document.querySelector("#puzzle");
puzzle.addEventListener("click", () => {
  gridAktivnosti.innerHTML = `
    <div class="downloadSinglePdf">
    <h2>Pets Progressive Jigsaws
    </h2>
    <p>Uključuje slagalice od 4 i 6 delova</p>
    <button><a href="https://s3-eu-west-1.amazonaws.com/orchardtoys/fs/pdf/pets_progressive_jigsaw_puzzles.pdf" target="_blank">Preuzmi</a></button>
  </div>
  
    <div class="downloadSinglePdf">
    <h2>Activity Puzzles 1-10</h2>
    <p>Na slagalici nacrtajte životinje, predmete i oblike koji odgovaraju broju</p>
    <button><a href="https://s3-eu-west-1.amazonaws.com/orchardtoys/fs/pdf/1-10_activity_jigsaw_puzzles_activity_sheet.pdf" target="_blank">Preuzmi</a></button>
</div>
    <div class="downloadSinglePdf">
    <h2>Jungle Animal Puzzles
    </h2>
    <p>Uključuje četiri slagalice od 4 dela</p>
    <button><a href="https://s3-eu-west-1.amazonaws.com/orchardtoys/fs/pdf/jungle_animal_strip_puzzles.pdf" target="_blank">Preuzmi</a></button>
</div>
    <div class="downloadSinglePdf">
    <h2>Under the Sea
    </h2>
    <p>Uključuje 6 dvodelnih slagalica sa prijateljskim morskim stvorenjima</p>
    <button><a href="https://s3-eu-west-1.amazonaws.com/orchardtoys/fs/pdf/under_the_sea_2-piece_jigsaws.pdf" target="_blank">Preuzmi</a></button>
  </div>

  <div class="downloadSinglePdf">
    <h2>Design a Jigsaw Puzzle
    </h2>
    <p>Sadrži dva prazna šablona za decu da naprave sopstvenu slagalicu</p>
    <button><a href="https://s3-eu-west-1.amazonaws.com/orchardtoys/fs/pdf/design_a_jigsaw_puzzle.pdf" target="_blank">Preuzmi</a></button>
  </div>

  <div class="downloadSinglePdf">
    <h2>Draw This Activity Jigsaw Puzzles
    </h2>
    <p>Nacrtajte nešto što počinje slovom prikazanim na slagalici</p>
    <button><a href="https://s3-eu-west-1.amazonaws.com/orchardtoys/fs/pdf/draw_this_activity_jigsaw_puzzles_sheets.pdf" target="_blank">Preuzmi</a></button>
  </div>


  <div class="downloadSinglePdf">
    <h2>Farmyard Opposites
    </h2>
    <p>Pomiješajte komade i zabavite se poklapajući suprotnosti</p>
    <button><a href="https://s3-eu-west-1.amazonaws.com/orchardtoys/fs/pdf/farmyard_opposites_jigsaws.pdf" target="_blank">Preuzmi</a></button>
  </div>
  `;
});

const recepti = document.querySelector("#recepti");
recepti.addEventListener("click", () => {
  gridAktivnosti.innerHTML = `
    <div class="downloadSinglePdf">
    <h2>Banana Smoothie
    </h2>
    <p>Napravite svoj ukusni smoothie od banane!</p>
    <button><a href="https://s3-eu-west-1.amazonaws.com/orchardtoys/fs/pdf/banana_smoothie_recipe_sheet.pdf" target="_blank">Preuzmi</a></button>
  </div>

  <div class="downloadSinglePdf">
  <h2>Cheesy Rainbow Pizza
  </h2>
  <p>Spremite svoju ukusnu picu kod kuće sa ovim ukusnim receptom.</p>
  <button><a href="https://s3-eu-west-1.amazonaws.com/orchardtoys/fs/pdf/cheesy_rainbow_pepper_pizzalr.pdf" target="_blank">Preuzmi</a></button>
</div>

<div class="downloadSinglePdf">
<h2>Cupcakes</h2>
<p>Napravite sami ukusne kolače!</p>
<button><a href="https://s3-eu-west-1.amazonaws.com/orchardtoys/fs/pdf/cupcakerecipesheet.pdf" target="_blank">Preuzmi</a></button>
</div>

<div class="downloadSinglePdf">
<h2>Sweet Dreams Biscuits
</h2>
<p>Napravite sami ukusne kekse.</p>
<button><a href="https://s3-eu-west-1.amazonaws.com/orchardtoys/fs/pdf/sweet_dreams_biscuits_activity_sheet.pdf" target="_blank">Preuzmi</a></button>
</div>

<div class="downloadSinglePdf">
<h2>Tuna Melt Pizza
</h2>
<p>Spremite svoju ukusnu picu kod kuće sa ovim ukusnim receptom.</p>
<button><a href="https://s3-eu-west-1.amazonaws.com/orchardtoys/fs/pdf/tunameltpizzarecipe.pdf" target="_blank">Preuzmi</a></button>
</div>

<div class="downloadSinglePdf">
<h2>Family Pizza 4 in 1
</h2>
<p>Spremite svoju ukusnu picu kod kuće sa ovim ukusnim receptom.</p>
<button><a href="https://s3-eu-west-1.amazonaws.com/orchardtoys/fs/pdf/four_in_one_family_pizza_recipe.pdf" target="_blank">Preuzmi</a></button>
</div>

<div class="downloadSinglePdf">
<h2>Pizza Baguettes
</h2>
<p>Sprmeite vlastite ukusne bagete od pice kod kuće sa ovim ukusnim receptom.</p>
<button><a href="https://s3-eu-west-1.amazonaws.com/orchardtoys/fs/pdf/margheritapizzabaguettesrecipesheet.pdf" target="_blank">Preuzmi</a></button>
</div>
  `;
});

const facts = document.querySelector("#facts");
facts.addEventListener("click", () => {
  gridAktivnosti.innerHTML = `
    <div class="downloadSinglePdf">
    <h2>Dinosaur Facts
    </h2>
    <p>Saznajte o različitim vrstama dinosaurusa iz jure i krede iz ovog zabavnog lista sa podacima!</p>
    <button><a href="https://s3-eu-west-1.amazonaws.com/orchardtoys/fs/pdf/036_activity_sheet_1.pdf" target="_blank">Preuzmi</a></button>
  </div>
  
    <div class="downloadSinglePdf">
    <h2>Dinosaur Facts 2
    </h2>
    <p>Saznajte o različitim vrstama dinosaurusa iz kasnog perioda krede pomoću ovog zabavnog informativnog lista!</p>
    <button><a href="https://s3-eu-west-1.amazonaws.com/orchardtoys/fs/pdf/036_activity_sheet_2.pdf" target="_blank">Preuzmi</a></button>
  </div>

    <div class="downloadSinglePdf">
    <h2>Dinosaur Facts 3
    </h2>
    <p>Naučite sve o dinosaurusima koji su lutali Zemljom sa ovim fascinantnim činjenicama!</p>
    <button><a href="https://s3-eu-west-1.amazonaws.com/orchardtoys/fs/pdf/dinosaurfactsheet.pdf" target="_blank">Preuzmi</a></button>
  </div>

    <div class="downloadSinglePdf">
    <h2>Habitats - The Ocean
    </h2>
    <p>Naučite sve o životinjama koje žive u Zemljinom okeanu sa ovim fascinantnim činjenicama!</p>
    <button><a href="https://s3-eu-west-1.amazonaws.com/orchardtoys/fs/pdf/habitatfacts-oceanregion.pdf" target="_blank">Preuzmi</a></button>
  </div>
    <div class="downloadSinglePdf">
    <h2>Habitats - Polar Regions
    </h2>
    <p>Naučite sve o životinjama koje žive u polarnim regionima Zemlje sa ovim fascinantnim činjenicama!</p>
    <button><a href="https://s3-eu-west-1.amazonaws.com/orchardtoys/fs/pdf/habitatfacts-polarregion.pdf" target="_blank">Preuzmi</a></button>
  </div>

    <div class="downloadSinglePdf">
    <h2>Habitats - Rainforest
    </h2>
    <p>Naučite sve o životinjama koje žive u prašumama Zemlje sa ovim fascinantnim činjenicama!</p>
    <button><a href="https://s3-eu-west-1.amazonaws.com/orchardtoys/fs/pdf/habitatfacts-rainforestregion.pdf" target="_blank">Preuzmi</a></button>
  </div>
  
    <div class="downloadSinglePdf">
    <h2>What's in space?
    </h2>
    <p>Saznajte više o tome šta je u svemiru sa ovim fascinantnim činjenicama!</p>
    <button><a href="https://s3-eu-west-1.amazonaws.com/orchardtoys/fs/pdf/whatsinspacefactsheet.pdf" target="_blank">Preuzmi</a></button>
  </div>
  
  `;
});

const radoznali = document.querySelector("#radoznali");
radoznali.addEventListener("click", () => {
  gridAktivnosti.innerHTML = `
  <div class="downloadSinglePdf">
  <h2>Collect Five
  </h2>
  <p>Sakupite pravu količinu predmeta za svaku od broja kade</p>
  <button><a href="https://s3-eu-west-1.amazonaws.com/orchardtoys/fs/pdf/can_you_collect_five_activity_sheet_hungry_little_minds.pdf" target="_blank">Preuzmi</a></button>
</div>

<div class="downloadSinglePdf">
<h2>Who Lives Here?
</h2>
<p>Ko živi u ovoj kući? Zabavite se dodavanjem znakova u prozore</p>
<button><a href="https://s3-eu-west-1.amazonaws.com/orchardtoys/fs/pdf/hlmwho_lives_here_activity_sheet_hungry_little_minds.pdf" target="_blank">Preuzmi</a></button>
</div>

<div class="downloadSinglePdf">
<h2>Hot Air Balloon Tracing
</h2>
<p>Razvijanje veština rukopisa praćenjem uzorka</p>
<button><a href="https://s3-eu-west-1.amazonaws.com/orchardtoys/fs/pdf/hot_air_balloon_tracing_activity_sheet_hungry_little_minds.pdf" target="_blank">Preuzmi</a></button>
</div>

<div class="downloadSinglePdf">
<h2>Matching Mice
</h2>
<p>Možete li spojiti miševe?</p>
<button><a href="https://s3-eu-west-1.amazonaws.com/orchardtoys/fs/pdf/matching_mice_activity_sheet_hungry_little_minds.pdf" target="_blank">Preuzmi</a></button>
</div>

<div class="downloadSinglePdf">
<h2>Pairs of Socks
</h2>
<p>Možete li da sparite čarape?
</p>
<button><a href="https://s3-eu-west-1.amazonaws.com/orchardtoys/fs/pdf/pairs_of_socks_activity_sheet_hungry_little_minds.pdf" target="_blank">Preuzmi</a></button>
</div>

<div class="downloadSinglePdf">
<h2>Primary Colours
</h2>
<p>Obojite slike na odgovarajućim bojama</p>
<button><a href="https://s3-eu-west-1.amazonaws.com/orchardtoys/fs/pdf/primary_colours_activity_sheet_hungry_little_minds.pdf" target="_blank">Preuzmi</a></button>
</div>

<div class="downloadSinglePdf">
<h2>Secondary Colours
</h2>
<p>Colour in the pictures with the correct colour

</p>
<button><a href="https://s3-eu-west-1.amazonaws.com/orchardtoys/fs/pdf/secondary_colours_activity_sheet_hungry_little_minds.pdf" target="_blank">Preuzmi</a></button>
</div>

<div class="downloadSinglePdf">
<h2>Can You Spot Circles?
</h2>
<p>Možete li uočiti oblike kruga oko sebe?</p>
<button><a href="https://s3-eu-west-1.amazonaws.com/orchardtoys/fs/pdf/can_you_spot..._circles_activity_sheet_hungry_little_minds.pdf" target="_blank">Preuzmi</a></button>
</div>


  `;
});

const coloring = document.querySelector("#coloring");
coloring.addEventListener("click", () => {
  gridAktivnosti.innerHTML = `
  <div class="downloadSinglePdf">
  <h2>Farmer Colouring
  </h2>
  <p>Zabavite se bojanjem u ovom prijateljskom farmeru!</p>
  <button><a href="https://s3-eu-west-1.amazonaws.com/orchardtoys/fs/pdf/farmer_colouring_activity_sheet_260121.pdf" target="_blank">Preuzmi</a></button>
</div>

  <div class="downloadSinglePdf">
  <h2>Rocket Colouring
  </h2>
  <p>Tabela za bojenje izvan ovog sveta</p>
  <button><a href="https://s3-eu-west-1.amazonaws.com/orchardtoys/fs/pdf/rocket_colouring_activity_sheet_260121.pdf" target="_blank">Preuzmi</a></button>
</div>

<div class="downloadSinglePdf">
<h2>T-Rex Colouring
</h2>
<p>A prehistoric colouring sheet

</p>
<button><a href="https://s3-eu-west-1.amazonaws.com/orchardtoys/fs/pdf/t-rex_colouring_activity_sheet_260121.pdf" target="_blank">Preuzmi</a></button>
</div>

<div class="downloadSinglePdf">
<h2>Mermaid Colouring
</h2>
<p>Have fun colouring in this mermaid

</p>
<button><a href="https://s3-eu-west-1.amazonaws.com/orchardtoys/fs/pdf/mermaid_colouring_activity_sheet_260121.pdf" target="_blank">Preuzmi</a></button>
</div>

<div class="downloadSinglePdf">
<h2>Snowman Colouring
</h2>
<p>Have fun colouring in this friendly snowman

</p>
<button><a href="https://s3-eu-west-1.amazonaws.com/orchardtoys/fs/pdf/colour_in_snowman_lr[1].pdf" target="_blank">Preuzmi</a></button>
</div>

<div class="downloadSinglePdf">
<h2>Penguin Colouring Sheet
</h2>
<p>Colour in the friendly penguins

</p>
<button><a href="https://s3-eu-west-1.amazonaws.com/orchardtoys/fs/pdf/penguin_colouring_activity_sheet.pdf" target="_blank">Preuzmi</a></button>
</div>

<div class="downloadSinglePdf">
<h2>Scarecrow
</h2>
<p>Can you add a fun pattern to the scarecrow's shirt?

</p>
<button><a href="https://s3-eu-west-1.amazonaws.com/orchardtoys/fs/pdf/scarecrow_activity_colouring_sheet.pdf" target="_blank">Preuzmi</a></button>
</div>
`;
});

const cestitke = document.querySelector("#cestitke");
cestitke.addEventListener("click", () => {
  gridAktivnosti.innerHTML = `
  <div class="downloadSinglePdf">
  <h2>Farmer Rodjendanska Cestitka
  </h2>
  <p></p>
  <button><a href="https://s3-eu-west-1.amazonaws.com/orchardtoys/fs/pdf/farm_birthday.pdf" target="_blank">Preuzmi</a></button>
</div>

<div class="downloadSinglePdf">
<h2>Super-Boy  Rodjendanska Cestitka
</h2>
<p></p>
<button><a href="https://s3-eu-west-1.amazonaws.com/orchardtoys/fs/pdf/super_birthday_1.pdf" target="_blank">Preuzmi</a></button>
</div>

<div class="downloadSinglePdf">
<h2>Super-Girl  Rodjendanska Cestitka
</h2>
<p></p>
<button><a href="https://s3-eu-west-1.amazonaws.com/orchardtoys/fs/pdf/super_birthday_2.pdf" target="_blank">Preuzmi</a></button>
</div>

<div class="downloadSinglePdf">
<h2>Jednorog Rodjendanska Cestitka 
</h2>
<p></p>
<button><a href="https://s3-eu-west-1.amazonaws.com/orchardtoys/fs/pdf/unicorn_birthday.pdf" target="_blank">Preuzmi</a></button>
</div>

<div class="downloadSinglePdf">
<h2>Dinosaurus Rodjendanska Cestitka
</h2>
<p></p>
<button><a href="https://s3-eu-west-1.amazonaws.com/orchardtoys/fs/pdf/dino_birthday.pdf" target="_blank">Preuzmi</a></button>
</div>
`;
});

const craft = document.querySelector("#craft");
craft.addEventListener("click", () => {
  gridAktivnosti.innerHTML = `
  <div class="downloadSinglePdf">
  <h2>T-Rex Door Hanger
  </h2>
  <p>Napravite sopstveni Dino-Snore-Us vešalicu za vrata!</p>
  <button><a href="https://s3-eu-west-1.amazonaws.com/orchardtoys/fs/pdf/t-rex_door_hanger.pdf" target="_blank">Preuzmi</a></button>
</div>

<div class="downloadSinglePdf">
<h2>Ice Dinosaurs
</h2>
<p>Otkrijte skrivene dinosauruse unutar ovih ledenih jaja</p>
<button><a href="https://s3-eu-west-1.amazonaws.com/orchardtoys/fs/pdf/ice_dinosaur_eggs_craft_sheet[2].pdf" target="_blank">Preuzmi</a></button>
</div>

<div class="downloadSinglePdf">
<h2>Cotton Wool Sheep
</h2>
<p>Napravite ovog mekog i pahuljastog prijatelja na farmi koristeći crni papir i kuglice od vate.</p>
<button><a href="https://s3-eu-west-1.amazonaws.com/orchardtoys/fs/pdf/cotton_wool_sheep_craft_sheet.pdf" target="_blank">Preuzmi</a></button>
</div>

<div class="downloadSinglePdf">
<h2>Hedgehog Craft Activity
</h2>
<p>Ukrasite ovog ježa obojenim štapićima ili slamkama</p>
<button><a href="https://s3-eu-west-1.amazonaws.com/orchardtoys/fs/pdf/hedgehog_activity_sheet.pdf" target="_blank">Preuzmi</a></button>
</div>

<div class="downloadSinglePdf">
<h2>Make Crazy Dough
</h2>
<p>Zabavite se praveći svoje ludo testo</p>
<button><a href="https://s3-eu-west-1.amazonaws.com/orchardtoys/fs/pdf/crazy_dough_activity_sheet[1].pdf" target="_blank">Preuzmi</a></button>
</div>

<div class="downloadSinglePdf">
<h2>Pink Piggy Painting
</h2>
<p>Jednostavna slikarska aktivnost pomoću ružičaste boje za stvaranje savršenog praseta!</p>
<button><a href="https://s3-eu-west-1.amazonaws.com/orchardtoys/fs/pdf/pink_piggy_painting_craft_sheet.pdf" target="_blank">Preuzmi</a></button>
</div>

<div class="downloadSinglePdf">
<h2>Paper Plate Monkey
</h2>
<p>Idite na banane sa ovim zabavnim majmunom od papirne ploče!</p>
<button><a href="https://s3-eu-west-1.amazonaws.com/orchardtoys/fs/pdf/paper_plate_monkey_craft_sheet.pdf" target="_blank">Preuzmi</a></button>
</div>

  `;
});

const others = document.querySelector("#others");
others.addEventListener("click", () => {
  gridAktivnosti.innerHTML = `
    <div class="downloadSinglePdf">
    <h2>Jungle Twins
    </h2>
    <p>Uparite parove životinja pa ih obojite!</p>
    <button><a href="https://s3-eu-west-1.amazonaws.com/orchardtoys/fs/pdf/jumble_jungle_activity_sheet.pdf" target="_blank">Preuzmi</a></button>
  </div>
  
  <div class="downloadSinglePdf">
  <h2>Something is Missing!
  </h2>
  <p>Nacrtajte stavke koje nedostaju, a zatim ih obojite</p>
  <button><a href="https://s3-eu-west-1.amazonaws.com/orchardtoys/fs/pdf/something_is_missing_activity_sheet_040321.pdf" target="_blank">Preuzmi</a></button>
</div>

<div class="downloadSinglePdf">
<h2>Weather Cut and Stick
</h2>
<p>Isecite odgovarajuću odeću po vremenu</p>
<button><a href="https://s3-eu-west-1.amazonaws.com/orchardtoys/fs/pdf/weather_cut_and_stick_activity_sheet_amended.pdf" target="_blank">Preuzmi</a></button>
</div>

<div class="downloadSinglePdf">
<h2>Spot the Difference on the Farm
</h2>
<p>Možete li uočiti 10 razlika?</p>
<button><a href="https://s3-eu-west-1.amazonaws.com/orchardtoys/fs/pdf/spot_the_difference_farm_activity_sheet.pdf" target="_blank">Preuzmi</a></button>
</div>

<div class="downloadSinglePdf">
<h2>Robot Shapes
</h2>
<p>Dodajte pravilan oblik robotu</p>
<button><a href="https://s3-eu-west-1.amazonaws.com/orchardtoys/fs/pdf/robot_shapes_activity_sheets[2].pdf" target="_blank">Preuzmi</a></button>
</div>


`;
});
