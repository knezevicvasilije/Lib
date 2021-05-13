const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".headerList");

  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
    console.log("radi");
  });
};
navSlide();

const igra1 = document.querySelector(".igra1");
const podkategorija = document.querySelector(".podkategorijaIgre");
igra1.addEventListener("click", () => {
  podkategorija.innerHTML = `
     <div class="ponudaIgre igraHover">
     <div class="img">
     <img src="./images/igre/igre sa brojevima png/monkey 1.png" alt="">
     </div>
 </div>

 <div class="description">
 <div class="titleDesc">Cheeky Monkeys</div>
 <p>Cheeky Monkeys je zabavna igra u kojoj je cilj sakupiti najviše banana, pri čemu moraš da ih čuvaš od drugih igrača! Igra je namenjena deci uzrasta 4-8 godina i u njoj će morati da razmišljaju stategijski i da donose odluke. Tokom svakog poteza igrači imaju izbor, da li da igraju sigurno i zadrže banane ili da rizikuju i dobiju više pri čemu mogu izgubiti one koje već imaju. Inovativno 3D drvo i majmuni koji vise sa njega dodaju zabavnu dimenziju ovoj igri! Dizajnirana za 2-4 igrača, ova uzbudljiva igra je prava igra za celu porodicu. U januaru 2017 godine, Cheeky Monkeys dobija nagradu “Najbolja Nova Igračka” na Londonskom sajmu igračaka.
 <br><br>
 - Zabavna strategijska igra za celu porodicu <br>
 - Razvija veštine brojanja i igranja <br>
 - 3D drvo je dodatna dimenzija igri <br>
 - Pogodna za uzrast 2+ god i za 1-4 igrača <br>
 - Upozorenje: Ne preporučujemo za decu ispod 3 godine
 </p>
 </div>
     <div class="ponudaIgre igraHover">
     <div class="img">
     <img src="./images/igre/igre sa brojevima png/092_magic_maths_box_400.png" alt="">
     </div>
 </div>
 <div class="description">
 <div class="titleDesc">Magic Maths</div>
 <p>U ovoj zabavnoj igri sa brojevima, igrači se smenjuju da bi rešili zadati problem kako bu napunili svoju tablu sa gadnim sastojcima za čaroliju, od mafina sa crvima do slinaca i mozgova! Kada rešite matematički problem počinje prava magija..trljanjem magičnog senzora saznajete da li je odgovor tačan!
 <br><br>
 - Zabavna igra sa brojevima<br>
 - Razvija veštine sabiranja, oduzimanja i množenja<br>
 - Pogodna za uzrast 5-7 god i za 2-4 igrača<br>
 
 </p>
 </div>


 
     <div class="ponudaIgre igraHover">
     <div class="img">
     <img src="./images/igre/igre sa brojevima png/074_money_match_cafe_box_400.png" alt="">
     </div>
 </div>
 <div class="description">
 <div class="titleDesc">Money Match Cafe</div>
 <p>Prvi serviraj jelo od kojeg ide voda na usta pravom stolu i zabavi se u ovoj igri sa novcem! Deca će koristiti veštine sabiranja da bi izračunali zarađeni novac. Ukoliko upare cenu sa obrokom, deca uzimaju novac i ljubazno posluže jelo mušteriji. Postoje dva nivoa težine pa je igra pogodna za mlađu i stariju decu. 
 <br><br>
 - Zabavna igra uloga<br>
 - Razvija veštine upravljanja novcem<br>
 - Dva nivoa igre<br>
 - Pogodna za uzrast 5-8 god i za 2-4 igrača<br>
 
 </p>
 </div>




     <div class="ponudaIgre igraHover">
     <div class="img">
     <img src="./images/igre/igre sa brojevima png/032_bus_stop_box_400.png" alt="">     </div>
 </div>
 <div class="description">
 <div class="titleDesc">Bus Stop Game</div>
 <p>Bus Stop igra je klasik Orchard Toys-a i dugo godina je u top deset najprodavanijih. Deca će razviti veštinu sabiranja i oduzimanja dok će se naravno i zabaviti. Pogodno za decu uzrasta 3+ god. Ova igra na tabli je idealna porodična igra. Trkajte se do autobuske stanice vozeći putnike! Bacite kockicu da bi pomerali vaš autobus napred ili nazad po tabli. Igrači vrte spiner koji određuje broj putnika koji ulaze ili izlaze iz busa. Pobednik je igrač koji na autobusku stanicu stigne sa najviše putnika!
 </p>
 </div>
     `;
});

const igra2 = document.querySelector(".igra2");
igra2.addEventListener("click", () => {
  podkategorija.innerHTML = `
  <div class="ponudaIgre igraHover">
  <div class="img">
  <img src="./images/igre/mini igre png/355_little_bus_lotto_box_400.png" alt=""> 
  </div>
  </div>
  <div class="description">
  <div class="titleDesc">Little Bus Lotto</div>
  <p>Ukrcavanje! Popuni sva mesta u busu sa životinjama putnicima u ovoj kompaktnoj loto igri koja je idealna za putovanja. 
<br><br>
  -	Igra za putovanja u lako prenosivom izdanju<br>
  -	Razvija veštine slaganja i opservacije<br>
  -	Zabavna edukativna igra pogodna za uzrast  3-6 god i za 2-4 igrača<br>
  -	Upozorenje: Sadrži sitne predmete, preporučen nadzor odraslih
  
  </p>
  </div>

  <div class="ponudaIgre igraHover">
<div class="img">

<img src="./images/igre/mini igre png/356_crocodile_snap_box_400.png" alt=""> 
</div>
</div>
<div class="description">
<div class="titleDesc">Crocodile Snap</div>
<p>
U ovoj uzbudljivoj igri memorije cilj je pronaći odgovarajuće parove čudnih životinja, od krokodila superheroja do gorila koje piju čaj. Ova igra razvija veštine slaganja i opservacije na zabavan način!
<br><br>
-	Igra za putovanja u lako prenosivom izdanju<br>
-	Razvija veštine slaganja i opservacije<br>
-	Zabavna edukativna igra pogodna za uzrast  3-8 god i za 2-4 igrača<br>
-	Upozorenje: Sadrži sitne predmete, preporučen nadzor odraslih
<br>
</p>
</div>

<div class="ponudaIgre igraHover">
<div class="img">
<img src="./images/igre/mini igre png/5011863102553.png" alt="">
</div>
</div>
<div class="description">
<div class="titleDesc">Animal Families</div>
<p>
Igrači treba da sakupe razne porodice životinja u ovoj zabavnoj igri slaganja i memorije koja je zasnovana na klasiku Happy Families. Pobednik je onaj ko sakupi sve porodice prvi! 
<br><br>
-	Igra za putovanja u lako prenosivom izdanju<br>
-	Razvija veštine slaganja i opservacije<br>
-	Zabavna edukativna igra pogodna za uzrast  4+ god i za 2-4 igrača<br>
-	Upozorenje: Sadrži sitne predmete, preporučen nadzor odraslih


</p>
</div>
`;
});

const igra3 = document.querySelector(".igra3");
igra3.addEventListener("click", () => {
  podkategorija.innerHTML = `
  <div class="ponudaIgre igraHover">
  <div class="img">
  <img
  src="./images/igre/prve igre png/037_post_box_game_box_400.png"
  alt=""
/>
  </div>
  </div>
  <div class="description">
  <div class="titleDesc">Post Box Game</div>
  <p>Jednostavna igra memorije sa dva načina igre!
  <br><br>
  - Zabavna prva igra<br>
  - Upoznavanje mališana sa pojmom igre<br>
  - Razvija veštine uparivanja boja i prepoznavanja<br>
  - Pogodna za uzrast 2+ god i za 1-4 igrača
  <br>
  </p>
  </div>


  <div class="ponudaIgre igraHover">
  <div class="img">
  <img
  src="./images/igre/prve igre png/071_old_macdonald_lotto_box_400.png"
  alt=""
/>
  </div>
  </div>
  <div class="description">
  <div class="titleDesc">Old Macdonald Lotto Game</div>
  <p>  Pravi mnogo zvukova i pokreta kako pronalaziš karte sa farme koje moraš upariti sa slikama sa table. Jednom kada sakupiš sve karte moraš pronaći svog farmera da bi pobedio! 
  <br>  <br>
  - Zabavna prva igra  <br>
  - Upoznavanje mališana sa pojmom igre  <br>
  - Razvija veštine slaganja i memorije  <br>
  - Pogodna za uzrast 2-6 god i za 2-4 igrača  <br>
  </p>
  </div>


  
  <div class="ponudaIgre igraHover">
  <div class="img">
  <img src="./images/igre/prve igre png/21.png" alt="" />
  </div>
  </div>
  <div class="description">
  <div class="titleDesc">Jungle Heads and Tails</div>
  <p>Idealna prva igra memorije za decu 18+ meseci, zasnovana na šarenim prijateljski nastrojenim životinjama iz džungle, kao što su krokodil, tigar i flamingo. Deca mogu igrati na jednostavan način, spajajući glave i repove životinja ili ih mogu okrenuti naopačke i igrati igru memorije. Velike karte su idealne za male ruke koje će se igrati sa njima! Jungle Heads and Tails igra je fenomenalan način za upoznavanje sa pojmom igre.
  <br>  <br>
  -	Igra spajanja sa temom džungle  <br>
  -	Savršena prva igra  <br>
  -	Velike karte  <br>
  -	Razvoj veština spajanja, memorije i opservacije  <br>
  -	Pogodna za uzrast 18+ meseci i za 1-4 igrača
    <br>

  </p>
  </div>`;
});

const igra4 = document.querySelector(".igra4");
igra4.addEventListener("click", () => {
  podkategorija.innerHTML = `
  <div class="ponudaIgre igraHover">
  <div class="img">
  <img src="./images/igre/igre sa oblicima png/031_insey_winsey_spider_box_400.png" alt="">
  </div>
  </div>
  <div class="description">
  <div class="titleDesc">Insey Winsey Spider Game</div>
  <p>Izaberi pametnog i prijateljski nastrojenog pauka i raspleti mrežu da zaigraš ovu zabavnu igru. Postoje dva načina za igru: koristi kockicu sa brojevima za razvoj veštine brojanja ili kockicu sa oblicima. Pauk mora da ide tamo gde kockica kaže, dok od spinera zavisi da li će stići pre kiše. Cilj igre je da pauk dođe do svoje mreže pre kiše! Deca će obožavati ovu igru zbog šarenih paukova i zbog uzbuđenja koje donosi spiner! 
  <br> <br>
  - Super zabavna igra sa oblicima   <br>
  - Bestseler  <br>
  - Pogodna za uzrast 3-6 god i za 2-4 igrača <br>
  
 
  </p>
  </div>
  
  
  <div class="ponudaIgre igraHover">
  <div class="img">
  <img src="./images/igre/igre sa oblicima png/037_post_box_game_box_400.png" alt="">
  </div>
  </div>
  <div class="description">
  <div class="titleDesc">Post Box Game</div>
  <p>Jednostavna igra memorije sa dva načina igre!
  <br><br>
  - Zabavna prva igra<br>
  - Upoznavanje mališana sa pojmom igre<br>
  - Razvija veštine uparivanja boja i prepoznavanja<br>
  - Pogodna za uzrast 2+ god i za 1-4 igrača
  <br>
  </p>
  </div>


  <div class="ponudaIgre igraHover">
  <div class="img">
   
  <img src="./images/igre/igre sa oblicima png/060_pizza_pizza_box_400.png" alt="">
  </div>
  </div>
  <div class="description">
  <div class="titleDesc">Pizza Pizza Game</div>
  <p>
  Zabavna igra slaganja sa bojama i oblicima u kojoj igrač pravi pice sa različitim sastojcima. Međutim, sastojci nisu tradicionalni već su ponekad veoma neobični i gadni, što decu zasmejava!
  <br>  <br>
  - Zabavna igra slaganja oblika  <br>
  - Razvija društvene veštine  <br>
  - Pogodna za uzrast 3-7 god i za 2-4 igrača  <br>

  </p>
  </div>



  <div class="ponudaIgre igraHover">
  <div class="img">
  <img src="./images/igre/igre sa oblicima png/095_rainbow_unicorns_box_400.png" alt="">
  </div>
  </div>
  <div class="description">
  <div class="titleDesc">Rainbow Unicorns</div>
  <p>Galopirajte preko duge uparivajući šarene jednoroge u ovoj magičnoj igri! Kada si na potezu izaberi kartu sa repom i upari je sa glavom jednoroga. Za svako uspešno uparivanje ideš polje bliže cilju gde te čeka ćup sa zlatom! Tablu i okruženje igre deca će obožavati!
  </p>  </p>
  -	Prva igra za mlađu decu  </p>
  -	Razvija veštine prepoznavanja boja i memorije  </p>
  -	Pogodna za uzrast 3-5 god i za 2-4 igrača  </p>
  

  </div>
  `;
});

const igra5 = document.querySelector(".igra5");
igra5.addEventListener("click", () => {
  podkategorija.innerHTML = `
    <div class="ponudaIgre igraHover">
    <div class="img">
    <img src="./images/igre/igre memorije png/003_shopping_list_box_400.png" alt="">    
    </div>
    </div>
    <div class="description">
  <div class="titleDesc">Shopping List</div>
  <p>Shopping List je igra koju deca jednostavno obožavaju!
  Brza i i jednostavna igra memorije i slaganja će sigurno držati pažnju vaših mališana. Okreni kartu i pronađi predmet sa spiska za kupovinu, od paradajza do praška za pranje veša ili pice. Ukoliko ga pronađeš izgovori njegovo ime i dodaj ga u korpu! Pobednik je onaj koji prvi sakupi sve sa spiska i ubaci u korpu! Sa raznim spiskovima i svakodnevnim predmetima, ova igra uči decu da razlikuju ove predmete i pomognu vam pri kupovini. Igra je predviđena za 2-4 igrača, međutim uz dodatke iz Shopping List Extras Fruit & Vegs i Shopping List Extras Clothes igru može igrati i do 8 igrača!
  <br><br>
  -	Super zabavna igra memorije<br>
  -	Najprodavanija igra Orchard Toys-a<br>
  -	Razvija veštine uparivanja i memorije<br>
  -	Pogodna za uzrast 3-7 god i za 2-4 igrača
  <br>
  </p>
  </div>

    <div class="ponudaIgre igraHover">
    <div class="img">
    <img src="./images/igre/igre memorije png/015_tell_the_time_box_400.png" alt="">
    </div>
    </div>
    <div class="description">
  <div class="titleDesc">Tell The Time</div>
  <p>
  Zanimljiva loto igra uz koju ćete naučiti da gledate vreme na satu!

  <br>
  <br>
  -	Naučite da gledate na sat u ovoj jednostavnoj igri
  <br>
  -	Naučite da gledate vreme i na analognom i na digitalnom satu 
  <br>
  -	Progresivna igra sa dva načina za igru
  <br>
  -	Zabavna edukativna igra pogodna za uzrast  5-9 god i za 2-4 igrača
  
  </p>
  </div>

    <div class="ponudaIgre igraHover">
    <div class="img">
    <img src="./images/igre/igre memorije png/017_crazy_chefs_box_400.png" alt="">
    </div>
    </div>
    <div class="description">
    <div class="titleDesc">Crazy Chefs</div>
    <p>
    U ovom Orchard Toys bestseleru istraži kakva sve to jela postoje! Izaberi svoju tablu sa kuvarom i receptom i pronađi sastojke za to jelo. Ko će prvi spremiti zadato jelo? Ova igra će decu definitivno zainteresovati za kuvanje kroz razgovor o hrani i sastojcima.
    <br> <br>
    -	Orchard Toys bestseller <br>
    -	Uči decu o raznim vrstama hrane <br>
    -	Ohrabruje decu za eksperimentisanje u kuhinji <br>
    -	Pogodno za decu uzrasta 3-6 god i za 2-5 igrača
    
    <br>
    </p>
    </div>

    <div class="ponudaIgre igraHover">
    <div class="img">
    <img src="./images/igre/igre memorije png/020_lunch_box_game_box_400.png" alt="">
    </div>
    </div>
    <div class="description">
    <div class="titleDesc">Lunch Box Game</div>
    <p>
    Ova ukusna loto igra uči decu o zdravoj hrani i pritom pobočjšava njihove veštine slaganja i memorije. Počinje se sa kutijom za ručak prepunom zdrave hrane, a igrači u potezima moraju da pronađu hranu iz kutije na kartama. Pobednik je onaj ko prvi pronađe svoj ručak! Sva hrana na kartama je poznata deci i ukusna! Igra uključuje četiri lunch boxa odnosno četiri kutije za ručak!
    <br>   <br>
    -	Uči decu o zdravoj hrani i ishrani   <br>
    -	Razvija veštine slaganja i memorije   <br>
    -	Pogodno za decu uzrasta 3-7 god i za 2-4 igrača   <br>
    
    <br>
    </p>
    </div>

    <div class="ponudaIgre igraHover">
    <div class="img">
    <img src="./images/igre/igre memorije png/022_pigs_in_pants_box_400.png" alt="">
    </div>
    </div>
    <div class="description">
    <div class="titleDesc">Pigs in Pants Game</div>
    <p>
    Ova igra je deci veoma zabavna, sa svim prasićima u šarenim pantalonama koji su jednostavno presmešni! Cilj igre je sakupiti što više parova pantalona koje su iste kao na slici u sredini table. Takođe, možete ukrasti odgovarajuće pantalone od drugog igrača govoreći "I'm going to pinch your pants!" Ali, igra se menja stalno jer drugi igrač može ukrasti pantalone odmah nazad! Deca i odrasli će se mnogo zabaviti i smejati igrajući ovu igru! 
    <br> <br>
    -	Zabavna i aktivna igra spajanja <br>
    -	Razvoj veština koncentracije i opservacije <br>
    -	Razvija društvenu komunikaciju <br>
    -	Pogodna za uzrast 4+ god i za 2-4 igrača
    
    <br>
    </p>
    </div>

    <div class="ponudaIgre igraHover">
    <div class="img">
    <img src="./images/igre/igre memorije png/033_tummy_ache_box_400.png" alt="">
    </div>
    </div>
    <div class="description">
    <div class="titleDesc">Tummy Ache Game</div>
    <p>
    Ova loto igra sa hranom donosi zabavu svim uzrastima! Cilj igrača je da napune svoje table ukusnom hranom, dok izbegavaju gadne kombinacije od koji boli stomak! Svi igrači počinju sa tablom jela, nakon čega uzimaju karte sa gomile i stavljaju ih na svoju tablu na pravo mesto. Ukoliko izvučete kartu sa gadnim sastojkom dodaje se u vaša jela. Pobednik je onaj ko prvi napuni svoju tablu sa balansiranim, ukusnim jelom! 
    <br><br>
    - Zabavna igra memorije <br>
    - Uči o hrani i obrocima<br>
    - Orchard Toys klasik<br>
    - Pogodna za uzrast 3+ god i za 2-4 igrača
    
    <br>
    </p>
    </div>

    <div class="ponudaIgre igraHover">
    <div class="img">
    <img src="./images/igre/igre memorije png/065_superhero_lotto_box_400.png" alt="">
    </div>
    </div>
    <div class="description">
    <div class="titleDesc">Superhero Lotto Game</div>
    <p>
    Super moćna igra memorije sa četiri zabavna superheroja sa super moćima! Iskoristi svoje sposobnosti memorije da upariš karte sa moćima i prvi popuniš svoju tablu, razgovarajući o interesantnim predmetima dok igraš. 
    <br> <br>
    -	Super zabavna igra slaganja i memorije <br>
    -	Prijateljski nastrojeni superheroji koje deca obožavaju <br>
    -	Dva nivoa igre, lakši i teži <br>
    -	Pogodna za uzrast 3-7 god i za 2-4 igrača
    
   
    </p>
    </div>
 
    <div class="ponudaIgre igraHover">
    <div class="img">
    <img src="./images/igre/igre memorije png/090_shopping_list_extras_fruit_and_veg_box_400.png" alt="">

    </div>
    </div>
    <div class="description">
    <div class="titleDesc">   Shopping List Extras Pack - Fruit & Veg Game</div>
    <p>Okreni kartu i napuni korpu za kupovinu sa ukusnim voćem i povrćem sa spiska. Igru možete igrati samo sa ovim kartama ili je kombinovati sa osnovnom Shopping List igrom ili sa dodacima iz Shopping List Extras Pack - Clothes Game igre. Sa kartama iz ove igre u kombinaciji sa jednim od drugih pakova igru može igrati do 6 igrača. Okreni kartu i pronađi predmet sa spiska za kupovinu. Ukoliko ga pronađeš izgovori njegovo ime i dodaj ga u korpu! Pobednik je onaj koji prvi sakupi sve sa spiska i ubaci u korpu! Sa raznim spiskovima i svakodnevnim predmetima, ova igra uči decu da razlikuju ove predmete i pomognu vam pri kupovini. Shopping List sa dodacima je naša najprodavanija igra koja će decu zabaviti satima i satima! 
    <br>  <br>
    -	Super zabavna igra memorije  <br>
    -	Najprodavanija igra Orchard Toys-a  <br>
    -	Razvija veštine uparivanja i memorije  <br>
    -	Pogodna za uzrast 3-7 god i za 2-8 igrača
    
  
    <br>
    </p>
    </div>
  `;
});

const igra6 = document.querySelector(".igra6");
igra6.addEventListener("click", () => {
  podkategorija.innerHTML = `
  <div class="ponudaIgre igraHover">
  <div class="img">
  <img
  src="./images/igre/jezicke igre png/083_alphabet_lotto_box_400.png"
  alt=""
/>
  </div>
  </div>
  <div class="description">
  <div class="titleDesc">Alphabet Lotto Game</div>
  <p>
  Ova jednostavna loto igra pomaže deci da prepoznaju slova iz alfabeta i njihove zvukove. Izaberi sa koje strane table želiš da igraš i budi prvi igrač koji će pronaći sve karte koje se slažu sa slovima ili slikama na tabli. Postoje četiri načina za igru: uparivanje slike sa slikom, slova sa slovom, slova sa slikom i slike sa slovom! Deca če se toliko zabaviti sa ovom igrom da neće primetiti da su već naučili alfabet!
  <br> <br>
  - Uči decu slova <br>
  - Više načina za igru <br>
  - Pogodna za uzrast 3-6 god i za 2-5 igrača
  
 
  </p>
  </div>


  
  <div class="ponudaIgre igraHover">
  <div class="img">
  <img
  src="./images/igre/jezicke igre png/093_magic_spelling_box_400.png"
  alt=""
/>
  </div>
  </div>
  <div class="description">
  <div class="titleDesc">Magic Spelling</div>
  <p>
  Pronađi slova sa čarobnim štapićem pre nego što istekne vreme i pobedi u ovoj magičnoj igri! Kada tačno speluješ reč, dodaj neki od fuj sastojaka kao što je oko od čudovišta ili veštičji prst. Prvi igrač koji sakupi sve sastojke i baci vradžbinu pobeđuje! 
  <br>  <br>
  - Zabavna igra sa slovima  <br>
  - Razvija veštine spelovanja  <br>
  - Pogodna za uzrast 5-7 god i za 2-4 igrača
  
  <br>
  </p>
  </div>


  <div class="ponudaIgre igraHover">
  <div class="img">
  <img
  src="./images/igre/jezicke igre png/218_match_and_spell_next_steps_box_400.png"
  alt=""
/>
  </div>
  </div>
  <div class="description">
  <div class="titleDesc">Match and Spell Next Steps Board Game</div>
  <p>
  Uz ovu igru ravijte veštine čitanja i spelovanja uz zvukove!
  <br> <br>
  -	Razvija veštine čitanja <br>
  -	Dupla table za što dužu igru <br>
  -	Pogodno za decu uzrasta 5+ god i za 1-4 igrača
  
  </p>
  </div>
  `;
});

const igra7 = document.querySelector(".igra7");
igra7.addEventListener("click", () => {
  podkategorija.innerHTML = `
  <div class="ponudaIgre igraHover">
  <div class="img">
  <img src="./images/igre/igre na tabli png/030_pop_to_the_shops_box_400.png" alt="">  
  </div>
  </div>
  <div class="description">
<div class="titleDesc">Pop to the Shops Game</div>
<p>
Pomozite deci da nauče kako da koriste novac kroz ovu šoping igru. Idite od prodavnice do prodavnice na tabli, koristeći novac za kupovinu raznih predmeta. Svaki igrač igra ulogu kupca i prodavca, kako bi naučili da vode ljubazan razgovor tokom kupovine. Tabla uključuje prodavnice i predmete sa kojima su deca upoznati, kao što je market, pekara, pijaca..
<br><br>
- Razvija veštine brojanja i upravljanja novcem<br>
- Uključuje lažni novac<br>
- Pogodna za uzrast 5-9 god i za 2-4 igrača<br>

<br>
</p>
</div>


<div class="ponudaIgre igraHover">
<div class="img">
<img src="./images/igre/igre na tabli png/032_bus_stop_box_400.png" alt="">   
</div>
</div>
<div class="description">
<div class="titleDesc">Bus Stop Game</div>
<p>
Bus Stop igra je klasik Orchard Toys-a i dugo godina je u top deset najprodavanijih. Deca će razviti veštinu sabiranja i oduzimanja dok će se naravno i zabaviti. Pogodno za decu uzrasta 3+ god. Ova igra na tabli je idealna porodična igra. Trkajte se do autobuske stanice vozeći putnike! Bacite kockicu da bi pomerali vaš autobus napred ili nazad po tabli. Igrači vrte spiner koji određuje broj putnika koji ulaze ili izlaze iz busa. Pobednik je igrač koji na autobusku stanicu stigne sa najviše putnika!
<br>
</p>
</div>


<div class="ponudaIgre igraHover">
<div class="img">
<img src="./images/igre/igre na tabli png/040_pirate_snakes_and_ladders_and_ludo_box_400.png" alt=""> 
</div>
</div>
<div class="description">
<div class="titleDesc">Pirate Snakes and Ladders & Ludo Game</div>
<p>
U ovoj igri, veseli pirati koriste merdevine od kanapa da bi što lakše došli do velikog kovčega sa blagom, ali moraju da se paze od klizavih morskih zmija jer ako se okliznu idu nazad! Na drugoj strani table je Ne ljuti se čoveče igra sa piratskom temom! Obe igre se zasnivaju na sreći, dok Ne ljuti se čoveče tera decu na strategijsko razmišljanje!
<br><br>
- Dve igre u jednoj<br>
- Igra zmija i merdevina i Ne ljuti se čoveče<br>
- Pogodna za uzrast 5-9 god i za 2-4 igrača

<br>
</p>
</div>


<div class="ponudaIgre igraHover">
<div class="img">
<img src="./images/igre/igre na tabli png/042_party_party_party_ox_400.png" alt="">  
</div>
</div>
<div class="description">
<div class="titleDesc">Party, Party, Party Game</div>
<p>
Dođite na žurku! Napuni ruksak sa stvarčicama i pridruži se prijateljima na plesnom podijumu! Cilj igre je napuniti 3D ruksak traženim stvarima i poklonom kako bi mogli ući na žurku na sredini table! 
<br><br>
 - Zabavna porodična igra<br>
- Razvija društvene veštine<br>
- Pogodna za uzrast 4-8 god i za 2-4 igrača

<br>
</p>
</div>


<div class="ponudaIgre igraHover">
<div class="img">
<img src="./images/igre/igre na tabli png/081_three_little_pigs_box_400.png" alt="">
</div>
</div>
<div class="description">
<div class="titleDesc">Three Little Pigs Game</div>
<p>
Svi naju priču o tri praseta koji pokušavaju da naprave svoje kuće pre nego ih strašni vuk sruši! Ovo je jednostavna i zabavna igra na tabli u kojoj igrači bacaju kockicu i pokušaju da dobiju slamke, štapiće ili cigle za građenje kuća. Međutim moraju da paze da ne dobiju zlog vuka na kockici. Ukoliko se to desi igrać vrti spiner i daje priliku vuku da sruši kuću drugog igrača! Kada svi sagrade kuće, moraju doći do centra table pre nego vuk krene da ruši opet. Ova igra je za decu veoma uzbudljiva, jer igrači moraju svo vreme da paze na vuka!
<br><br>
- Zabavna igra šanse<br>
- Zasnovana na klasiku<br>
- Pogodna za uzrast 3-6 god i za 2-4 igrača

<br>
</p>
</div>


<div class="ponudaIgre igraHover">
<div class="img">
      
<img src="./images/igre/igre na tabli png/095_rainbow_unicorns_box_400.png" alt="">
</div>
</div>
<div class="description">
<div class="titleDesc">Rainbow Unicorns Game</div>
<p>
Galopirajte preko duge uparivajući šarene jednoroge u ovoj magičnoj igri! Kada si na potezu izaberi kartu sa repom i upari je sa glavom jednoroga. Za svako uspešno uparivanje ideš polje bliže cilju gde te čeka ćup sa zlatom! Tablu i okruženje igre deca će obožavati!
<br><br>
-	Prva igra za mlađu decu<br>
-	Razvija veštine prepoznavanja boja i memorije<br>
-	Pogodna za uzrast 3-5 god i za 2-4 igrača

</p>
</div>

    `;
});

const igra8 = document.querySelector(".igra8");
igra8.addEventListener("click", () => {
  podkategorija.innerHTML = `
  <div class="ponudaIgre igraHover">
  <div class="img">
  <img src="./images/igre/porodicne igre png/030_pop_to_the_shops_box_400.png" alt="">
  </div>
  </div>
  <div class="description">
  <div class="titleDesc">Pop to the Shops Game</div>
  <p>

  Pomozite deci da nauče kako da koriste novac kroz ovu šoping igru. Idite od prodavnice do prodavnice na tabli, koristeći novac za kupovinu raznih predmeta. Svaki igrač igra ulogu kupca i prodavca, kako bi naučili da vode ljubazan razgovor tokom kupovine. Tabla uključuje prodavnice i predmete sa kojima su deca upoznati, kao što je market, pekara, pijaca..

  <br>
  <br>
  - Razvija veštine brojanja i upravljanja novcem
  <br>
  - Uključuje lažni novac
  <br>
  - Pogodna za uzrast 5-9 god i za 2-4 igrača
  
  <br>
  </p>
  </div>

  <div class="ponudaIgre igraHover">
  <div class="img">
  <img src="./images/igre/porodicne igre png/040_pirate_snakes_and_ladders_and_ludo_box_400.png" alt=""> 
  </div>
  </div>
  <div class="description">
  <div class="titleDesc">Pirate Snakes and Ladders & Ludo Game</div>
  <p>

  U ovoj igri, veseli pirati koriste merdevine od kanapa da bi što lakše došli do velikog kovčega sa blagom, ali moraju da se paze od klizavih morskih zmija jer ako se okliznu idu nazad! Na drugoj strani table je Ne ljuti se čoveče igra sa piratskom temom! Obe igre se zasnivaju na sreći, dok Ne ljuti se čoveče tera decu na strategijsko razmišljanje!
  <br> <br>
  - Dve igre u jednoj <br>
  - Igra zmija i merdevina i Ne ljuti se čoveče <br>
  - Pogodna za uzrast 5-9 god i za 2-4 igrača <br>
  
  <br>
  </p>
  </div>

  <div class="ponudaIgre igraHover">
  <div class="img">

  <img src="./images/igre/porodicne igre png/078_sound_detectives_box_400.png" alt="">
  </div>
  </div>
  <div class="description">
  <div class="titleDesc">Sound Detectives</div>
  <p>
  Sound Detectives je zvučna igra koja u kombinaciji sa aplikacijom donosi neograničenu zabavu!
  <br>  <br>
  Kada čuješ zvuk koji odgovara određenoj karti, pomeri detektiva polje napred kako bi uhvatio smelog lopova! U kombinaciji sa besplatnom Orchard Toys aplikacijom prvi uhvati lopova i pobedi u igri! 
  <br>  <br>
  - Prva igra ovog brenda koja kombinuje aplikaciju i igru   <br>
  - Neobični zvukovi koje će deca obožavati   <br>
  - Pogodna za uzrast 3-7 god i za 2-4 igrača
  
  <br>
  </p>
  </div>

  <div class="ponudaIgre igraHover">
  <div class="img">
  <img src="./images/igre/porodicne igre png/086_dinosaur_race_box_400.png" alt="">
  </div>
  </div>
  <div class="description">
  <div class="titleDesc">Dinosaur Race Game</div>
  <p>
  U ovoj uzbudljivoj igri šansi, trkaj se do pozicije na podijumu kako bi osvojio medalju! Svi dinosaursi se trkaju do cilja kako bi osvojili bronzanu, srebrnu ili zlatnu medalju! Ova zabavna porodična igra uči decu veštinama uparivanja i brojanja. 
  <br> <br>
  - Zabavna igra slaganja i brojanja <br>
  - Razvija veštine brojanja <br>
  - Upoznavanje dinosaursa <br>
  - Pogodna za uzrast 3-6 god i za 2-4 igrača
  
  <br>
  </p>
  </div>

  <div class="ponudaIgre igraHover">
  <div class="img">
  <img src="./images/igre/porodicne igre png/monkey 1.png" alt=""> 
  </div>
  </div>
  <div class="description">
  <div class="titleDesc">Cheeky Monkeys</div>
  <p>
  Cheeky Monkeys je zabavna igra u kojoj je cilj sakupiti najviše banana, pri čemu moraš da ih čuvaš od drugih igrača! Igra je namenjena deci uzrasta 4-8 godina i u njoj će morati da razmišljaju stategijski i da donose odluke. Tokom svakog poteza igrači imaju izbor, da li da igraju sigurno i zadrže banane ili da rizikuju i dobiju više pri čemu mogu izgubiti one koje već imaju. Inovativno 3D drvo i majmuni koji vise sa njega dodaju zabavnu dimenziju ovoj igri! Dizajnirana za 2-4 igrača, ova uzbudljiva igra je prava igra za celu porodicu. U januaru 2017 godine, Cheeky Monkeys dobija nagradu “Najbolja Nova Igračka” na Londonskom sajmu igračaka.
  <br>  <br>
  - Zabavna strategijska igra za celu porodicu  <br>
  - Razvija veštine brojanja i igranja  <br>
  - 3D drvo je dodatna dimenzija igri  <br>
  - Pogodna za uzrast 2+ god i za 1-4 igrača  <br>
  - Upozorenje: Ne preporučujemo za decu ispod 3 godine
  
  <br>
  </p>
  </div>
  `;
});
