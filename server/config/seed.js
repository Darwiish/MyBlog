/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import Main from '../api/main/main.model';
import Blog from '../api/blog/blog.model';
import Category from '../api/category/category.model';
import User from '../api/user/user.model';
import About from '../api/about/about.model';



Blog.find({}).removeAsync()
  .then(() => {
    Blog.create({
      _id: '5714cdae6db4da350f41206c',
      Title: 'Economics and Business',
      date:new Date(2014,5,20,11,30),
      text: 'A recent analysis published by Uber illustrates how the system is intended to work. Jonathan Hall, head of economic research at Uber, Cory Kendrick, a data scientist at the firm, and Chris Nosko, of the University of Chicago, compared two high-demand cases in New York city to illustrate how surge pricing is intended to work. In March 2015 it kicked in after a sold-out concert by Ariana Grande, a singer, in an arena in the middle of Manhattan. As the show came to an end, the number of people in the area opening the Uber app quadrupled in just a few minutes. Uber’s algorithm swiftly applied surge pricing; the average waiting time for a car rose only modestly, while the “completion rate”—the share of requests for rides that are met—never fell below 100%. On New Year’s Eve in 2014, in contrast, Uber’s surge-pricing algorithm broke down for 26 minutes, leaving New York without surge pricing. The average wait time for a car soared from about two minutes to roughly eight, while the completion rate dropped below 25% (see chart).The comparison may overstate the power of surge pricing. Even without the help of algorithms, cab drivers know to converge on a venue as an event finishes; more Uber drivers than normal were surely in the area at the end of Ms Grande’s concert in expectation of the extra business. Yet the possibility of earning a surge fare may also strengthen drivers’ incentives to anticipate and respond pre-emptively to high demand. Ironically, the better Uber’s surge-pricing algorithm works, the less the company will need to use it, since drivers’ pre-emptive responses will tend to eliminate the demand imbalances that make surge pricing necessary in the first place.There are tantalising hints that Uber hopes to follow this logic to its conclusion. Mr Schneider noted that clever machine-learning tools could process Uber’s piles of data and determine when and where demand is likely to outstrip the supply of cars. There would be no need to wait until demand starts to rise, nor for drivers to scan concert schedules. The ability to anticipate demand would be of some use to Uber today: it could tell drivers where they are likely to be needed. But they would presumably not respond as rapidly as they do to the inducement of surge fares. Eventually, however, Uber hopes to replace its human drivers with autonomous vehicles, which could be directed around the city by the company’s computers without any pecuniary incentives. (The company still has an incentive to maximise earnings, though, so it might opt to keep surge pricing even if technology made it redundant, at the risk of further public rage.) Apps and downs Whether Uber remains a big part of the transport network in future, and whether it retains surge pricing, depends in part on how well local governments manage the transport system as a whole. In districts or cities where travellers have appealing alternatives, in the form of good public transport or private competitors to Uber, users will be more sensitive to price. Surge pricing will therefore not generate a big financial windfall for Uber (or its drivers). But where public transport is thin on the ground, or where Uber has little private competition, it is a different story. In other words, surge pricing is really only as painful as local officials allow it to be.',
      image:"http://www.businesskorea.co.kr/sites/default/files/field/image/global%20economy.jpg",
    category:'5714a42ad2f313180d199d40'

  },{
      _id: '5714cdae6db4da350f41206e',
      Title: 'Trump Make America Great Again!',
      date: new Date(2016,3,10,12,20),
      text: 'The trouble with Donald Trump is not, as Jeb Bush and others would have it, that he s not a true conservative from any perspective. The trouble with Trump is not that his policy positions on immigration, ISIS, health care, Social Security, or whatever don t stand up to a moment of casual scrutiny. That we re even talking about his “positions” means that we have already progressed to the dangerous Stage Two of the Trump phenomenon, as if his stated views are the standard by which Trump ought to be judged—a huge victory for him right there. The trouble with Trump is that he is, by temperament, by experience, and by character, utterly unqualified to be president of the United States. He is a buffoon. That is why his campaign is a joke, not the merits or otherwise of his alleged policies. All he brings to the table is a lot of money and a talent for publicity. These are not worthless assets in a presidential candidate. Trump is right, unfortunately, that his billions free him from the need to raise money, with all the dispiriting and time-consuming compromises that that entails. And, of course, he is not the first politician with a knack for drawing attention to himself.But he may be the first who offers little more than that. Oh, a bit of wit and charm. A sense of humor that always leaves the listener wondering whether he is serious or not. But where is the wisdom? Where is the gravitas—or, as the Brits call it, less pretentiously, the bottom ? Trump is self-designated role in our culture has been the clown who, because he does not give a damn, will say anything, including truths that more serious people will not utter. That is fine. I wouldn not mind having that job. But Trump is apparently tired of playing the Fool. He wants to be King Lear.',
      image:"http://www.redstate.com/uploads/2016/03/trump-hair-flickr-cc.jpg",
    category:'5714a4f03fa656260da0efba'
  },{
      _id: '573d992bf859286607bbbff1',
      Title: 'Help!',
      date: new Date(2015,5,28,9,30),
      text: 'Our Earth is warming. Earth is average temperature has risen by 1.5°F over the past century, and is projected to rise another 0.5 to 8.6°F over the next hundred years. Small changes in the average temperature of the planet can translate to large and potentially dangerous shifts in climate and weather.The evidence is clear. Rising global temperatures have been accompanied by changes in weather and climate. Many places have seen changes in rainfall, resulting in more floods, droughts, or intense rain, as well as more frequent and severe heat waves. The planet is oceans and glaciers have also experienced some big changes - oceans are warming and becoming more acidic, ice caps are melting, and sea levels are rising. As these and other changes become more pronounced in the coming decades, they will likely present challenges to our society and our environment..',
      image:"http://coldfusion3.com/wp-content/uploads/2014/11/polar_square.jpg",
      category:'5714a4f03fa656260da0efbb'
    },{
      _id: '573d992bf859286607bbbff2',
      Title: 'Coming to accept the Creator',
      date: new Date(2015,5,28,10,30),
      text: 'How does one swim upstream and become a creationist? This work helps answer the question. Editor Jerry Bergman begins with a brief analysis of the failures of evolutionary theory, and then elaborates on his impressive credentials.This book is an anthology of mostly autobiographical articles by Dr Jerry Bergman, Dr Richard Lumsden, Dr D. Russell Humphreys, Dr Royal Truman, James Wight, Steve Miller, Dr Robert A. Herrmann, Tom Hennigan, Kitty Foth-Regner, Dr Wayne Frair, Doug Sharp, Joshua Gilbert, Guy Forsythe, Michael Gailey, Dr Jean Lightner, DVM, Jaap Kies, Rudolf Steinberg, Mark Stewart, Larry Kisner, Lee McCracken, Karl Priest, Tom Vail, Kerby Rials, Jonathan Bartlett, Dr Richard Bliss, Dr Jonathan Henry, Russ Miller, and Paul Humber.The authors, most of whom are college educated, come from many walks of life, including those of a scientific or religious bent. Some were raised in Christian homes, had grown nominal or had drifted away, and then had come back to the Faith and become creationists. Others were atheists who had become impressed by the evidence supporting a creator. Some had been theistic evolutionists for a while before realizing its unworkability and becoming creationists. One common thread in the testimonies was growing dissatisfaction with the explanatory power of evolution, and realization that only a creator would do.',
      image:"http://education.kilroy.dk/media/6391900/study-philosophy-abroad.jpg?class=Image520x292",
    category:'5714a4f03fa656260da0efbc'
    },{
      _id: '573d992bf859286607bbbff3',
      Title: 'David Cameron Says Leaving E.U. Would Hobble British Economy',
      date: new Date(2015,3,24,12,30),
      text: 'EASTLEIGH, England — Leaving the European Union would amount to economic self-destruction for Britain, Prime Minister David Cameron said on Monday, presenting a Treasury report that warned of a recession, a decline in the value of the pound, and half a million lost jobs.Mr. Cameron and George Osborne, the chancellor of the Exchequer, who are campaigning for Britain to stay in the European Union in the referendum on June 23, have also warned that home values would fall and that Britons would face costlier foreign holidays if they voted to leave the bloc.Speaking a month before the vote, Mr. Cameron said that leaving the European Union would jeopardize Britain’s recovery from the economic damage caused by the world financial crisis.“It would be like surviving a fall and then running straight back to the cliff edge,” Mr. Cameron said at an event at the headquarters of a home-improvement chain in southern England.Recent opinion polls have shown voters are leaning toward remaining in the European Union, but the outcome remains too close to call.',
      image:"http://www.oeko.de/fileadmin/forschung/themen/recht.jpg",
      category:'5714a4f03fa656260da0efba'
    },{
      _id: '573d992bf859286607bbbff4',
      Title: 'Valuta',
      date: new Date(2016,3,9,18,30),
      text: 'Britiske pund er valutaen i Storbritannien. Valutaens officielle navn er pund sterling eller sterling, og valutakoden er GBP. Som symbol for britiske pund, anvendes £. Symbolet er en forkortelse af det latinske Libra, der betyder pund.Britiske pund anvendes ikke udelukkende i Storbritannien, men finder også anvendelse på flere oversøiske britiske territorier, som f.eks. Falklandsøerne og Gibraltar..',
      image:"http://joeforamerica.com/wp-content/uploads/2015/02/economic-crisis1_2.jpg",
      Name: 'Sport',
      category:'5714a42ad2f313180d199d40'
    },{
      _id: '573d992bf859286607bbbff5',
      Title: 'Climate change',
      date: new Date(2015,3,24,12,30),
      text: 'Climate change is a change in the statistical distribution of weather patterns when that change lasts for an extended period of time (i.e., decades to millions of years). Climate change may refer to a change in average weather conditions, or in the time variation of weather around longer-term average conditions (i.e., more or fewer extreme weather events). Climate change is caused by factors such as biotic processes, variations in solar radiation received by Earth, plate tectonics, and volcanic eruptions. Certain human activities have also been identified as significant causes of recent climate change, often referred to as global warming.[1]Scientists actively work to understand past and future climate by using observations and theoretical models. A climate record—extending deep into the Earth is past—has been assembled, and continues to be built up, based on geological evidence from borehole temperature profiles, cores removed from deep accumulations of ice, floral and faunal records, glacial and periglacial processes, stable-isotope and other analyses of sediment layers, and records of past sea levels. More recent data are provided by the instrumental record. General circulation models, based on the physical sciences, are often used in theoretical approaches to match past climate data, make future projections, and link causes and effects in climate change.',
      image:"http://www.nasa.gov/sites/default/files/thumbnails/image/15-115.jpg",
      Name: 'Sport',
      category:'5714a4f03fa656260da0efbb'
    },{
      _id: '573d992bf859286607bbbff6',
      Title: 'French philosophy',
      date: new Date(2015,3,24,12,30),
      text: 'Descartes then claimed that because he discovered the Cogito through perceiving it clearly and distinctly, anything he can perceive clearly and distinctly must be true. Then he argues that he can conceive of an infinite being, but finite beings cannot produce infinite ideas and hence an infinite being must have put the idea into his mind. He uses this argument, commonly known as an ontological argument, to invoke the existence of an omni-benevolent God as the indubitable foundation that makes all sciences possible. Many people admired Descartes intentions, but were unsatisfied with this solution. Some accused him of circularity, proclaiming his ontological argument uses his definition of truth as a premise, while his proof of his definition of truth uses his ontological argument as a premise. Hence the problems of solipsism, truth and the existence of the external world came to dominate 17th century western thought.Another famous problem arises from Descartes’ substance dualism. For Descartes, a substance is that which can be conceived independent of everything else and exist independent of anything else. Since Descartes conceived of the mind independent of everything else when doubting everything uncertain, and because if he wanted to God could produce a world in which only the mind existed, he came to define the mind as a different substance from that of body. For Descartes, the mind is defined as an unextended substance and the body as an extended substance. This raised the fundamental question of how it is possible that mind and body interact with one another.',
      image:"http://frihed.org/wp-content/uploads/2015/07/image_in-text.jpeg",
      Name: 'Sport',
      category:'5714a4f03fa656260da0efbc'
    },{
      _id: '573d992bf859286607bbbff7',
      Title: 'Refugee Crisis',
      date: new Date(2015,3,24,12,30),
      text: 'The European migrant crisis[n 2] or European refugee crisis[n 3] began in 2015,[10] when a rising number of refugees and migrants[11] made the journey to the European Union (EU) to seek asylum, traveling across the Mediterranean Sea or through Southeast Europe. They came from areas such as Western and South Asia, Africa,[12][13] and the Western Balkans.[14] According to the United Nations High Commissioner for Refugees, the top three nationalities of the over one million Mediterranean Sea arrivals between January 2015 and March 2016 were Syrian (46.7%), Afghan (20.9%) and Iraqi (9.4%).[15] Of the refugees and migrants arriving in Europe by sea in 2015, 58% were men, 17% women and 25% children.[16] The number of deaths at sea rose to record levels in April 2015, when five boats carrying almost 2,000 migrants to Europe sank in the Mediterranean Sea, with a combined death toll estimated at more than 1,200 people.[17]The shipwrecks took place in a context of ongoing conflicts and refugee crises in several Asian and African countries, which increased the total number of forcibly displaced people worldwide at the end of 2014 to almost 60 million, the highest level since World War II.[18][19] Amid an upsurge in the number of sea arrivals in Italy from Libya in 2014, several European Union governments refused to fund the Italian-run rescue option Operation Mare Nostrum, which was replaced by Frontex is Operation Triton in November 2014. In the first six months of 2015, Greece overtook Italy as the first EU country of arrival, becoming, in the summer 2015, the starting point of a flow of refugees and migrants moving through Balkan countries to northern European countries, mainly Germany and Sweden. Since April 2015, the European Union has struggled to cope with the crisis, increasing funding for border patrol operations in the Mediterranean, devising plans to fight migrant smuggling, launching Operation Sophia and proposing a new quota system to relocate and resettle asylum seekers among EU states and alleviate the burden on countries on the outer borders of the Union. Individual countries have at times reintroduced border controls within the Schengen Area, and rifts have emerged between countries willing to accept asylum seekers and others trying to discourage their arrival..',
      image:"http://multimedia.pol.dk/archive/00965/Hungary_Migrants_965294a.jpg",
      Name: 'Politics',
      category:'5714a4f03fa656260da0efba'
      })
        .then(() => {
        console.log('finished populating blogs');
    });
  });

  Category.find({}).removeAsync()
    .then(() => {
      Category.createAsync({
        Name: 'Politics',
        _id: '5714a4f03fa656260da0efba'
    },{
        Name: 'Economy',
        _id: '5714a42ad2f313180d199d40'
    },{
        Name: 'Climate',
        _id : '5714a4f03fa656260da0efbb'
      },{
        Name: 'Filosofi',
         _id : '5714a4f03fa656260da0efbc'
      })
      .then(() => {
        console.log('finished populating categories');
      });
    });
  Main.find({}).removeAsync()
      .then(() => {
        Main.createAsync({
         _id: '5734c86fd65126680f9ee4a1',
          Name: 'Mikael Hansen',
          Address :'Vorrevangs Alle 11',
          PhoneNumber:'76766778',
          Message:'I really can not say whether the comments about the politician make sense or not but this article contains tremendous insights about the EU It is a very good article that everyone should read.',
          Email: 'mlh@gmail.com'
        }, {
          _id: '5734c86fd65126680f9ee4a2',
          Name: 'Ahmed Mohamed',
          Address :'Lindholmvej 4',
          PhoneNumber: '86234424',
          Message: 'This type of article presents facts about something that happened recently or that will happen in the near future. It usually covers the 5 Ws and H: who, what, where when, why and how.',
          Email: 'am@gmail.com'
          }, {
          _id: '5734c86fd65126680f9ee4a3',
          Name: 'Lisbet Andersen',
          Address : 'Februarvej 12',
          PhoneNumber: '897780898',
          Message: 'I find your opinion quite interesting, but the other day I stumbled upon a completely different advice from another blogger, I need to think that one through, thanks for posting',
          Email: 'las@yahoo.com'
        }, {
         _id: '5734c86fd65126680f9ee4a4',
         Name: 'Georg Smith',
         Address : 'Paludan Müllers Vej 15',
         PhoneNumber: '86780898',
         Message: 'Thanks, great post. I really like your point of view!',
         Email: 'gsf@uk.com'
        })
        .then(() => {
          console.log('finished populating mains');
        });
      });

      About.find({}).removeAsync()
          .then(() => {
            About.createAsync({
              Name: 'Abdirahman Yusuf Abdi',
              image :'/assets/images/me.jpg',
              text:'A professional with a naturally curious attitude, I wish never to limit myself - I believe that having a wider view and understanding of technology, a way with people and an appreciation for all the other fine things in life makes for a developer that has a place in this world.',

            })
            .then(() => {
              console.log('finished populating abouts');
            });
          });

  User.find({}).removeAsync()
    .then(() => {
      User.createAsync({
        provider: 'local',
        name: 'Test User',
        email: 'test@example.com',
        password: 'test'
      }, {
        provider: 'local',
        role: 'admin',
        name: 'Abdirahman',
        email: 'admin@example.com',
        password: 'admin'
      })
      .then(() => {
        console.log('finished populating users');
      });
    });
