import React, { Component } from 'react';

import CSQ0 from '../images/MarAuPonsh.jpg';
import CSQ1 from '../images/kol.png';
import CSQ2 from '../images/kol.png';
import CSQ3 from '../images/kol.png';
import CSQ4 from '../images/kol.png';
import CSQ5 from '../images/kol.png';
import CSQ6 from '../images/kol.png';
import CSQ7 from '../images/G.jpg';



import Mus01 from '../Soons/freestyle-b_o_b-pou-on-misié-santi.mp3';
import Mus02 from '../Soons/freestyle-b_o_b-&-DiPy-&-Sléman-G.mp3';
import Mus03 from '../Soons/freestyle-mixé-[(Sléman-G-&-Dygleur-&-Gordonn-&-b_o_b }].mp3';
import Mus04 from '../Soons/FuCK_v~1.mp3';
import Mus05 from '../Soons/clash-Matrix-com-from-tivoli-boston.mp3';
import Mus06 from '../Soons/délire-clash-bob-dipy-dygleur.mp3';
import Mus07 from '../Soons/EnDiPy-aNd-B_o_B( twop ti misié)-remix.mp3';
import Mus08 from '../Soons/Beatrice-aka-Pin\'s-a-lisifè(clash).mp3';

import Mus11 from '../Soons/b_o_b-réponse-aw-négro.mp3';
import Mus12 from '../Soons/b_o_b-une-life-raconté.mp3';
import Mus13 from '../Soons/beatch-remix-accéléré]Dygleur-b_o_b-slaiman-g[.mp3';
import Mus15 from '../Soons/bob-Délire-pour-Nez-Man.mp3';
import Mus16 from '../Soons/bob-&-dygleur-on-sans-ba-les-COUILLES.mp3';

import Mus21 from '../Soons/dygleur-délire-clash.mp3';
import Mus22 from '../Soons/dygleur-fanm-ka-wayné.mp3';
import Mus23 from '../Soons/dygleur-lol.mp3';
import Mus24 from '../Soons/dygleur-tic-tac-2.mp3';
import Mus25 from '../Soons/Dygleur-&-b_o_b-alé-la-nou-pani-tan.mp3';
import Mus26 from '../Soons/Dygleur-&-B_o_B-KonT-Lé-Wack-MC.mp3';
import Mus27 from '../Soons/dygleur-toujou-la.mp3';
import Mus28 from '../Soons/clash-a-dygleur.mp3';

import Mus31 from '../Soons/Don\'J-Big-freestyle(Début la).mp3';
import Mus32 from '../Soons/Don\'J-BIG-fResStYle-n°2.mp3';
import Mus33 from '../Soons/Don\'J-Yo-ka-rotey-Bonjou-aaaaa(bien-chiré-22.06.09).mp3';
import Mus34 from '../Soons/Don\'J-Grand-kA-Dérespecté.mp3';
import Mus35 from '../Soons/Don\'J-MANTI-MANTI-MANTI-MANTI(freestyl.mp3';
import Mus36 from '../Soons/Don\'J-ToU-sA-sé-RèVe-An-NoU.mp3';
import Mus37 from '../Soons/Don\'J-MaNa-MaN-feAt-Te-TT-MoUnE-lA-nErVeUx.mp3';

import Mus41 from '../Soons/01-Piste-1.mp3';
import Mus42 from '../Soons/08-Piste-8.mp3';
import Mus43 from '../Soons/09-Piste-9.mp3';
import Mus44 from '../Soons/an-ka-bwe-gunit134-bouyon.mp3';
import Mus45 from '../Soons/Dalki-&-Daypi-(reve-an-nou)-2009°.mp3';
import Mus46 from '../Soons/DAYPI-(alé-sa-vinn-on-genre-°-2009.mp3';
import Mus47 from '../Soons/Daypi-et-Dalki-La-ViE-lA-rEd-FREESTYLE2.mp3';
import Mus48 from '../Soons/DinoneTayy-King\'s_ je-suis-un-blackman-[€MPIRYA SOUND].mp3';

import Mus71 from '../Soons/Mi-poul-la-G.mp3';


const dataSoons = [

    {
        img: CSQ0,
        alt: "freestyle-b_o_b-pou-on-misié-santi",
        name: "freestyle-b_o_b-pou-on-misié-santi",
        editeur:"KMS Monopoly",
        artist:"Sléman-G, Dygleur, Gordonn, b_o_b",
        anios:"2010",
        description: "Petit fristyle histoir de délirer",
        soons: Mus01,
        nb: 1
    },
    {
        img: CSQ0,
        alt: "freestyle-b_o_b-&-DiPy-&-Sléman-G",
        name: "freestyle-b_o_b-&-DiPy-&-Sléman-G",
        editeur:"KMS Monopoly",
        artist:"Sléman-G, Dygleur, Gordonn, b_o_b",
        anios:"2010",
        description: "Petit fristyle histoir de délirer",
        soons: Mus02,
        nb: 1
    },
    {
        img: CSQ0,
        alt: "freestyle-mixé-[(Sléman-G-&-Dygleur-&-Gordonn-&-b_o_b }]",
        name: "freestyle-mixé-[(Sléman-G-&-Dygleur-&-Gordonn-&-b_o_b }]",
        editeur:"KMS Monopoly",
        artist:"Sléman-G, Dygleur, Gordonn, b_o_b",
        anios:"2010",
        description: "Petit fristyle histoir de délirer",
        soons: Mus03,
        nb: 1
    },
    {
        img: CSQ0,
        alt: "FuCK_v~1",
        name: "FuCK_v~1",
        editeur:"KMS Monopoly",
        artist:"Iconu",
        anios:"2010",
        description: "Petit fristyle histoir de dénoncer les MVT",
        soons: Mus04,
        nb: 1
    },
    {
        img: CSQ0,
        alt: "clash-Matrix-com-from-tivoli-boston",
        name: "clash-Matrix-com-from-tivoli-boston",
        editeur:"LES PNGUINS MASK€ ",
        artist:"Mis--- B-- & M--- & G---- & St-- Fri-- ...",
        anios:"2011",
        description: "Petit fristyle histoir de délirer",
        soons: Mus05,
        nb: 1
    },
    {
        img: CSQ0,
        alt: "FuCK_v~1",
        name: "délire clash bob dipy dygleur",
        editeur:"KMS Monopoly",
        artist:"bob dipy dygleur",
        anios:"2010",
        description: "Petit fristyle histoir de dénoncer les MVT",
        soons: Mus06,
        nb: 1
    },
    {
        img: CSQ0,
        alt: "EnDiPy aNd B_o_B( twop ti misié)-remix",
        name: "EnDiPy aNd B_o_B( twop ti misié)-remix",
        editeur:"KMS Monopoly",
        artist:"EnDiPy aNd B_o_B",
        anios:"2010",
        description: "Petit fristyle histoir de dénoncer les MVT",
        soons: Mus07,
        nb: 1
    },
    {
        img: CSQ0,
        alt: "Beatrice-aka-Pin\'s-a-lisifè(clash)",
        name: "Beatrice-aka-Pin\'s-a-lisifè(clash)",
        editeur:"LES PNGUINS MASK€ ",
        artist:"Mis--- B-- & M--- & G----",
        anios:"2011",
        description: "Petit fristyle histoir de délirer",
        soons: Mus08,
        nb: 1
    },   
    {
        img: CSQ1,
        alt: "b_o_b-réponse-aw-négro",
        name: "b_o_b-réponse-aw-négro",
        editeur:"KMS Monopoly",
        artist:"Mister B_O_B",
        anios:"2011",
        description: "Petit fristyle histoir de délirer",
        soons: Mus11,
        nb: 1
    },
    {
        img: CSQ1,
        alt: "b_o_b-une-life-raconté",
        name: "b_o_b-une-life-raconté",
        editeur:"KMS Monopoly",
        artist:"Mister B_O_B",
        anios:"2011",
        description: "Petit fristyle histoir de délirer",
        soons: Mus12,
        nb: 1
    },
    {
        img: CSQ1,
        alt: "beatch remix accéléré ]Dygleur-b_o_b-slaiman-g[",
        name: "beatch remix accéléré ]Dygleur-b_o_b-slaiman-g[",
        editeur:"KMS Monopoly",
        artist:"Mister B_O_B",
        anios:"2011",
        description: "Petit fristyle histoir de délirer",
        soons: Mus13,
        nb: 1
    },

    {
        img: CSQ1,
        alt: "bob Délire pour Nez-Man",
        name: "bob Délire pour Nez-Man",
        editeur:"KMS Monopoly",
        artist:"Mister B_O_B",
        anios:"2010",
        description: "Petit fristyle histoir de délirer",
        soons: Mus15,
        nb: 1
    },
    {
        img: CSQ1,
        alt: "bob & dygleur on-sans-ba-les-COUILLES",
        name: "bob & dygleur on-sans-ba-les-COUILLES",
        editeur:"KMS Monopoly",
        artist:"Mister B_O_B",
        anios:"2010",
        description: "Petit fristyle histoir de délirer",
        soons: Mus16,
        nb: 1
    },
    {
        img: CSQ2,
        alt: "dygleur - délire clash",
        name: "dygleur - délire clash",
        editeur:"KMS Monopoly",
        artist:"Dygleur",
        anios:"2011",
        description: "Petit fristyle histoir de délirer",
        soons: Mus21,
        nb: 1
    },
    {
        img: CSQ2,
        alt: "dygleur - fanm ka wayné",
        name: "dygleur - fanm ka wayné",
        editeur:"KMS Monopoly",
        artist:"Dygleur",
        anios:"2011",
        description: "Petit fristyle histoir de délirer",
        soons: Mus22,
        nb: 1
    },
    {
        img: CSQ2,
        alt: "dygleur - lol",
        name: "dygleur - lol",
        editeur:"KMS Monopoly",
        artist:"Dygleur",
        anios:"2011",
        description: "Petit fristyle histoir de délirer",
        soons: Mus23,
        nb: 1
    },
    {
        img: CSQ2,
        alt: "dygleur - tic tac 2",
        name: "dygleur - tic tac 2",
        editeur:"KMS Monopoly",
        artist:"Dygleur",
        anios:"2011",
        description: "Petit fristyle histoir de délirer",
        soons: Mus24,
        nb: 1
    },
    {
        img: CSQ2,
        alt: "Dygleur & b_o_b - alé la nou pani tan",
        name: "Dygleur & b_o_b - alé la nou pani tan",
        editeur:"KMS Monopoly",
        artist:"Dygleur, BOB",
        anios:"2011",
        description: "Petit fristyle histoir de délirer",
        soons: Mus25,
        nb: 1
    },
    {
        img: CSQ2,
        alt: "Dygleur & B_o_B  KonT Lé Wack MC",
        name: "Dygleur & B_o_B  KonT Lé Wack MC",
        editeur:"KMS Monopoly",
        artist:"Dygleur, BOB",
        anios:"2011",
        description: "Petit fristyle histoir de délirer",
        soons: Mus26,
        nb: 1
    },
    {
        img: CSQ2,
        alt: "dygleur toujou la",
        name: "dygleur toujou la",
        editeur:"KMS Monopoly",
        artist:"Dygleur",
        anios:"2011",
        description: "Petit fristyle histoir de délirer",
        soons: Mus27,
        nb: 1
    },
    {
        img: CSQ2,
        alt: "clash-a-dygleur",
        name: "clash-a-dygleur",
        editeur:"KMS Monopoly",
        artist:"Dygleur",
        anios:"2011",
        description: "Petit fristyle histoir de délirer",
        soons: Mus28,
        nb: 1
    },
    {
        img: CSQ3,
        alt: "Don\'J-Big-freestyle(Début la)",
        name: "Don\'J-Big-freestyle(Début la)",
        editeur:"KMS Monopoly",
        artist:"Don\'J",
        anios:"2011",
        description: "Petit fristyle histoir de délirer",
        soons: Mus31,
        nb: 1
    },
    {
        img: CSQ3,
        alt: "Don\'J-BIG-fResStYle-n°2",
        name: "Don\'J-BIG-fResStYle-n°2",
        editeur:"KMS Monopoly",
        artist:"Don\'J",
        anios:"2011",
        description: "Petit fristyle histoir de délirer",
        soons: Mus32,
        nb: 1
    },
    {
        img: CSQ3,
        alt: "Don\'J-Yo-ka-rotey-Bonjou-aaaaa!(bien chiré!! 22.06.09)",
        name: "Don\'J-Yo-ka-rotey-Bonjou-aaaaa!(bien chiré!! 22.06.09)",
        editeur:"KMS Monopoly",
        artist:"Don\'J",
        anios:"2011",
        description: "Petit fristyle histoir de délirer",
        soons: Mus33,
        nb: 1
    },
    {
        img: CSQ3,
        alt: "Don\'J-Grand-kA-Dérespecté!.mp3",
        name: "Don\'J-Grand-kA-Dérespecté!.mp3",
        editeur:"KMS Monopoly",
        artist:"Don\'J",
        anios:"2011",
        description: "Petit fristyle histoir de délirer",
        soons: Mus34,
        nb: 1
    },
    {
        img: CSQ3,
        alt: "Don\'J-MANTI!!-MANTI!!-MANTI!!!-MANTI!!!(freestyl.mp3",
        name: "Don\'J-MANTI!!-MANTI!!-MANTI!!!-MANTI!!!(freestyl.mp3",
        editeur:"KMS Monopoly",
        artist:"Don\'J",
        anios:"2011",
        description: "Petit fristyle histoir de délirer",
        soons: Mus35,
        nb: 1
    },
    {
        img: CSQ3,
        alt: "Don\'J-ToU-sA-sé-RèVe-An-NoU.mp3",
        name: "Don\'J-ToU-sA-sé-RèVe-An-NoU.mp3",
        editeur:"KMS Monopoly",
        artist:"Don\'J",
        anios:"2011",
        description: "Petit fristyle histoir de délirer",
        soons: Mus36,
        nb: 1
    },
    {
        img: CSQ3,
        alt: "Don\'J-MaNa-MaN-feAt-Te-!-TT-MoUnE-lA-nErVeUx!.mp3",
        name: "Don\'J-MaNa-MaN-feAt-Te-!-TT-MoUnE-lA-nErVeUx!.mp3",
        editeur:"KMS Monopoly",
        artist:"Don\'J, MaNa",
        anios:"2011",
        description: "Petit fristyle histoir de délirer",
        soons: Mus37,
        nb: 1
    },
    {
        img: CSQ4,
        alt: "SégnorTaa",
        name: "SégnorTaa",
        editeur:"GETO ENTREPRIZ",
        artist:"DiJiz & ...",
        anios:"2010",
        description: "Petit fristyle histoir de délirer",
        soons: Mus41,
        nb: 1
    },
    {
        img: CSQ4,
        alt: "Kan k tann",
        name: "Kan k tann",
        editeur:"GETO ENTREPRIZ",
        artist:"DiJiz",
        anios:"2010",
        description: "Petit fristyle histoir de délirer",
        soons: Mus42,
        nb: 1
    },
    {
        img: CSQ4,
        alt: "An lari la tini si an lari la tini sa",
        name: "An lari la tini si an lari la tini sa",
        editeur:"GETO ENTREPRIZ",
        artist:"S-Miki",
        anios:"2010",
        description: "Petit fristyle histoir de délirer",
        soons: Mus43,
        nb: 1
    },
    {
        img: CSQ4,
        alt: "an-ka-bwe-gunit134-bouyon",
        name: "an-ka-bwe-gunit134-bouyon",
        editeur:"OTHER",
        artist:"gunit134",
        anios:"2014",
        description: "an ka bwe bouyon",
        soons: Mus44,
        nb: 1
    },
    {
        img: CSQ4,
        alt: "Dalki-&-Daypi-(reve-an-nou)-2009°",
        name: "Dalki-&-Daypi-(reve-an-nou)-2009°",
        editeur:"KMS & OTHER",
        artist:"Dalki & Daypi",
        anios:"2011",
        description: "Petit fristyle histoir de délirer",
        soons: Mus45,
        nb: 1
    },
    {
        img: CSQ4,
        alt: "DAYPI-(alé-sa-vinn-on-genre-°-2009",
        name: "DAYPI-(alé-sa-vinn-on-genre-°-2009",
        editeur:"KMS & OTHER",
        artist:"DAYPI",
        anios:"2011",
        description: "Petit fristyle histoir de délirer",
        soons: Mus46,
        nb: 1
    },
    {
        img: CSQ4,
        alt: "Daypi-et-Dalki-La-ViE-lA-rEd-FREESTYLE2",
        name: "Daypi-et-Dalki-La-ViE-lA-rEd-FREESTYLE2",
        editeur:"KMS & OTHER",
        artist:"Daypi & Dalki",
        anios:"2011",
        description: "Petit fristyle histoir de délirer",
        soons: Mus47,
        nb: 1
    },
    {
        img: CSQ4,
        alt: "/DinoneTayy-King\'s_ je-suis-un-blackman-[€MPIRYA SOUND]",
        name: "/DinoneTayy-King\'s_ je-suis-un-blackman-[€MPIRYA SOUND]",
        editeur:"GETO ENTREPRIZ",
        artist:"Dinone",
        anios:"2010",
        description: "Petit fristyle histoir de délirer",
        soons: Mus48,
        nb: 1
    },
    {
        img: CSQ7,
        alt: "Mi-poul-la-G.mp3",
        name: "Mi poul la - G",
        editeur:"KMS Monopoly",
        artist:"Gordonn",
        anios:"2018",
        description: "Petit fristyle histoir de délirer",
        soons: Mus71,
        nb: 1
    }  
];

export default dataSoons;

