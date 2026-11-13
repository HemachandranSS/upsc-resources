const topics = [
    {
        "name": "1_China..._Too_Smart",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/1_China..._Too_Smart/CurrentAffairsChina.pdf",
        "spotify_link": "https://open.spotify.com/episode/3PMOt0W28VoGIj5cHhaeaE?si=lu6xRsLhQiKmhHG6hZ52dQ"
    },
    {
        "name": "2_China_–_Taiwan_Relations_&_Donald_Trump",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/2_China_–_Taiwan_Relations_&_Donald_Trump/ChinaTaiwanRelationsDonaldTrump-1544181375.pdf",
        "spotify_link": "https://open.spotify.com/episode/1ZsWbAQJZNLtfds4003ZVc?si=N4KqSkTkSseeguxOLru7tg"
    },
    {
        "name": "3_40_Years_for_Chinese_Reforms",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/3_40_Years_for_Chinese_Reforms/40YearsforChineseReforms-1545300627.pdf",
        "spotify_link": "https://open.spotify.com/episode/4iRTOPpbBJd4kQ6z0X7oKl?si=gWSkkLXCSMig_h4e6ArtVQ"
    },
    {
        "name": "4_China_Rise_&_American_Retreat",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/4_China_Rise_&_American_Retreat/ChinaRiseAmericanRetreat-1516712916.pdf",
        "spotify_link": "https://open.spotify.com/episode/20x97UZ5vaxndBoXfQDr9Z?si=FCWiaETqSoa25tkApR3p0A"
    },
    {
        "name": "5_SOUTH_CHINA_SEA",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/5_SOUTH_CHINA_SEA/SOUTHCHINASEACapsule-6of28thWeek11thJulyto17thJulyof2016.pdf",
        "spotify_link": "https://open.spotify.com/episode/2Mp82mMgk0osqqW7AMvtco?si=JQUePfJ6SZ2kFhx2BKnIDg"
    },
    {
        "name": "6_Nepal_..._Tilt_Towards_China",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/6_Nepal_..._Tilt_Towards_China/NepalTiltTowardsChina-1530786584.pdf",
        "spotify_link": "https://open.spotify.com/episode/3x3xlegUovjtIiiT79dvoh?si=k9TrfEdbQf6sc2gqJ-nieQ"
    },
    {
        "name": "7_Backlash_Against_China",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/7_Backlash_Against_China/BacklashAgainstChina-1541759441.pdf",
        "spotify_link": "https://open.spotify.com/episode/1JI6XKRQ4HzE4HUNQ0dpbl?si=82Bwk4KeTNarEEfiP6bLnA"
    },
    {
        "name": "8_Balancing_China",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/8_Balancing_China/BALANCINGCHINA-1516421274.pdf",
        "spotify_link": "https://open.spotify.com/episode/5S5odydjCEzjNsovJyck4w?si=AmtMRa_BT9mQMAC9iYDLow"
    },
    {
        "name": "9_China_…_Unique_Exploitation_Model_of_DEBT",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/9_China_…_Unique_Exploitation_Model_of_DEBT/ChinaUniqueExploitationModelofDEBT-1538995678.pdf",
        "spotify_link": "https://open.spotify.com/episode/5gOYXAQRYSsWVRdTs61VtX?si=P23W-2-0RkS--U4c-91dZA"
    },
    {
        "name": "10_China_–_USA…Huawei_Issue",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/10_China_–_USA…Huawei_Issue/ChinaUSAHuaweiIssue-1544440178.pdf",
        "spotify_link": "https://open.spotify.com/episode/05bQ9qZtoASbHTsgorrbvp?si=kTebCrvnRZaKvHu44WXWyw"
    },
    {
        "name": "11_UN_Peacekeeping_&_China",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/11_UN_Peacekeeping_&_China/UNPeacekeepingChina-1515733207.pdf",
        "spotify_link": "https://open.spotify.com/episode/2gA9zbIcDWMlXD9scXpI7w?si=MXxEkoBeTZ6Vc0fe9dTuRA"
    },
    {
        "name": "12_North_Korea_in_Need_of_Chinese_Help!",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/12_North_Korea_in_Need_of_Chinese_Help!/NorthKoreainNeedofChineseHelp-1547112298.pdf",
        "spotify_link": "https://open.spotify.com/episode/4tNYL6sXVeNdNEGlNJ3xDq?si=SKYLeNJiT_avvDPgse6ICw"
    },
    {
        "name": "13_Typical_Chinese_Statecraft",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/13_Typical_Chinese_Statecraft/ItemWiseEditorialDiscussion-TypicalChineseStatecraft-1518259036.pdf",
        "spotify_link": "https://open.spotify.com/episode/1TXZ0ouDCjrfFKs1w7qZ5S?si=ZZinzyaVT5u96aPJinm59g"
    },
    {
        "name": "15_XI_JINPING_&_CHINA",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/15_XI_JINPING_&_CHINA/XIJINPINGCHINA-1517464920.pdf",
        "spotify_link": "https://open.spotify.com/episode/00GNcwbPAQ95OLQCblJIFo?si=1cFMcVzdRVKzHWRKxkiecg"
    },
    {
        "name": "16_XI_Jinping_Unlimited",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/16_XI_Jinping_Unlimited/XIJinpingUnlimited-1520248049.pdf",
        "spotify_link": "https://open.spotify.com/episode/5EASNYP5ZhrIAGcjx63SGA?si=D9AWQgaaRNaLbQIcn-Vejg"
    },
    {
        "name": "17_Softening_Stand_On_China",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/17_Softening_Stand_On_China/SOFTENINGSTANDONCHINA-1520507819.pdf",
        "spotify_link": "https://open.spotify.com/episode/6CR8Oww9jE7i5gZAMT57JB?si=nKPeM_BCSruKH6ZENb2BLg"
    },
    {
        "name": "18_Tibet_&_Indian_Diplomacy",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/18_Tibet_&_Indian_Diplomacy/TibetIndianDiplomacy-1522062318.pdf",
        "spotify_link": "https://open.spotify.com/episode/4mz9fjpZDzoCXOPOiXmK9H?si=LKcRYNg-RSOWjEXzdqwiOQ"
    },
    {
        "name": "19_JOIN_OBOR_..._A_VIEW",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/19_JOIN_OBOR_..._A_VIEW/MiniCapsule-007-1494510879.pdf",
        "spotify_link": "https://open.spotify.com/episode/1c4IZ4jjbU1uhwoQEylFp8?si=t8-WfO2JQy--NTn339GFUQ"
    },
    {
        "name": "20_BELT_AND_ROAD_INITIATIVE_&_INDIA",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/20_BELT_AND_ROAD_INITIATIVE_&_INDIA/Capsule-2-1493903749.pdf",
        "spotify_link": "https://open.spotify.com/episode/5G41YrdL02ICcJsUL4N2qK?si=7xmqxF2HTty_SR3ucMGyKA"
    },
    {
        "name": "21_BRI_Attracting_Western_Powers_!",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/21_BRI_Attracting_Western_Powers_!/Presentation5-1552298545.pdf",
        "spotify_link": "https://open.spotify.com/episode/7MoX0RQoDL5bKycKUQkyxe?si=6C6Nve46S7-PhruKVetfaA"
    },
    {
        "name": "22_Teesta_dispute",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/22_Teesta_dispute/EditorialDiscussion-58.pdf",
        "spotify_link": "https://open.spotify.com/episode/4GUQgoB6cT2PHCk5CMSxRr?si=INecWqpCQbmish7uooVuNw"
    },
    {
        "name": "23_NRC...A_Comprehensive_View",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/23_NRC...A_Comprehensive_View/NRCAComprehensiveView-1533209108.pdf",
        "spotify_link": "https://open.spotify.com/episode/7HNM5CxHn2ekuIQkk3jsPF?si=9q-lSYi8TTaFnxi-KfGS_A"
    },
    {
        "name": "24_India_-_Bangladesh",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/24_India_-_Bangladesh/EditorialDiscussion-54.pdf",
        "spotify_link": "https://open.spotify.com/episode/7Dbi0Gl3MZMgk4NgERz2uE?si=Ui1_rKYTQSqPwO8XwEF1Rw"
    },
    {
        "name": "25_Bangladesh_PM",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/25_Bangladesh_PM/EditorialDiscussion-56.pdf",
        "spotify_link": "https://open.spotify.com/episode/13GdXGB1zhcXds9CX2FgSd?si=km3pijC6TCab2HBbpUdrFQ"
    },
    {
        "name": "26_Let_us_retain_the_trusted_ally",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/26_Let_us_retain_the_trusted_ally/BangladeshLetUsRetaintheTrustedAlly-1545054046.pdf",
        "spotify_link": "https://open.spotify.com/episode/1x2mTEe9T1GspzdWYo1rRB?si=YxVrL-UrT4iuya-oRDlUWg"
    },
    {
        "name": "27_Sheikh_Hasina_for_Fourth_Term_…_But_Challenge_is_Rule_of_Law",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/27_Sheikh_Hasina_for_Fourth_Term_…_But_Challenge_is_Rule_of_Law/1-1-19EDITORIALFINALCOPY-pdf-Copy1-1546338146.pdf",
        "spotify_link": "https://open.spotify.com/episode/11VnETkzc9fRwE7ODWE3Lu?si=cAzFiTmqRqGMI_BGXaGBsw"
    },
    {
        "name": "28_India-Bangladesh...Maturity_in_Ties",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/28_India-Bangladesh...Maturity_in_Ties/India-BangladeshMaturityinTies-1546938708.pdf",
        "spotify_link": "https://open.spotify.com/episode/1TNdBbshoQXVSpJXLNSeXC?si=HtIaNuK-SruQdqbr8Lk4CA"
    },
    {
        "name": "29_Spectacular_Social_Progress_in_Bangladesh",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/29_Spectacular_Social_Progress_in_Bangladesh/SpectacularSocialProgressinBangladesh-1546595191.pdf",
        "spotify_link": "https://open.spotify.com/episode/1gmRStcsezwvL18FB1NS8R?si=a8aELkaYTkei68jxVh2B_Q"
    },
    {
        "name": "30_Bangladesh_At_The_Crossroads",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/30_Bangladesh_At_The_Crossroads/BangladeshAtTheCrossroadsCapsule-1of27thWeek4thJulyto10thJulyof2016.pdf",
        "spotify_link": "https://open.spotify.com/episode/5d0KXgl9Q5IAZomRnyeb2Z?si=17X3p2WcRXCXQKbM30KulQ"
    },
    {
        "name": "31_MUSICAL_CHAIRS_IN_NEPAL",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/31_MUSICAL_CHAIRS_IN_NEPAL/CurrentAffairsMUSICALCHAIRSINNEPALCapsule-3of30thWeek25thJuly-31stJulyof2016.pdf",
        "spotify_link": "https://open.spotify.com/episode/368d8BsjJYlYK0urBYI3bw?si=QKvz5O4STbybQ53EoIFWOg"
    },
    {
        "name": "32_Elections_in_Nepal",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/32_Elections_in_Nepal/ElectionsinNepal-1515732551.pdf",
        "spotify_link": "https://open.spotify.com/episode/3bdLK4VnzMARrTfNWEbtUZ?si=jQdZyJ6RTpytFBdaUIydtA"
    },
    {
        "name": "33_Nepal_PM_in_India",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/33_Nepal_PM_in_India/CurrentAffairsNEPALPMININDIACapsule-4of37thWeek12thSeptto18thSeptof2016.pdf",
        "spotify_link": "https://open.spotify.com/episode/3am5tAotQkL6WVnBsBTFb2?si=TdsT-nrUTHeR5ZU-KaSM7g"
    },
    {
        "name": "34_India_-_Nepal_Relations",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/34_India_-_Nepal_Relations/ItemWiseEditorialDiscussion-India-NepalRelations-1518415971.pdf",
        "spotify_link": "https://open.spotify.com/episode/21NhLd9gaSaBZb8QT1AgG1?si=7dHUaujYQyym_uBg94jvqA"
    },
    {
        "name": "35_Nepal_&_Impeachment",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/35_Nepal_&_Impeachment/MiniCapusle-08-1493901865.pdf",
        "spotify_link": "https://open.spotify.com/episode/2ZyJLqnibyq9dGvqMWmqoc?si=Gv1YYCPGS-KXSFeyEL0roQ"
    },
    {
        "name": "36_Delay_in_Government_Formation",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/36_Delay_in_Government_Formation/6NepalDelayinGovernmentFormation-1515220908.pdf",
        "spotify_link": "https://open.spotify.com/episode/30ge4dw5BzvXgKAGAAl4A0?si=oggAaYpHRkaHzy-FOVxdlQ"
    },
    {
        "name": "37_DEVELOPMENTS_IN_NEPAL",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/37_DEVELOPMENTS_IN_NEPAL/ItemWiseEditorialDiscussion-DEVELOPMENTSINNEPAL-1517812842.pdf",
        "spotify_link": "https://open.spotify.com/episode/0zEkZ5mkTz36IJjiVg4N5C?si=mlr-VXZ8SeG6VxHmoyZElw"
    },
    {
        "name": "38_India_–_Nepal_..._Reset",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/38_India_–_Nepal_..._Reset/INDIANEPALRESET-1519122146.pdf",
        "spotify_link": "https://open.spotify.com/episode/2XhpBpoyqkb1ZPR3BOzk4K?si=lBde5rKTRj2pf12PwWrYaA"
    },
    {
        "name": "39_Nepal..._Stable_Government",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/39_Nepal..._Stable_Government/NepalStableGovernment-1515559658.pdf",
        "spotify_link": "https://open.spotify.com/episode/432rAb97WqkEzVJlSLauCE?si=vS4MjqhBRy2WSKpp6-W88Q"
    },
    {
        "name": "40_Bhutan_…_Understand_the_Sensitivities!",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/40_Bhutan_…_Understand_the_Sensitivities!/BhutanUnderstandtheSensitivities-1535720677.pdf",
        "spotify_link": "https://open.spotify.com/episode/3qMlXuutgZ4iBH2nszMQqf?si=Ki9Z4ABBQ0WcjAgAwNoFOQ"
    },
    {
        "name": "41_Bhutan_..._India_Relations_..._Challenges",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/41_Bhutan_..._India_Relations_..._Challenges/BhutanIndiaRelationsChallenges-1540896180.pdf",
        "spotify_link": "https://open.spotify.com/episode/4kM3oMeJ32C0HDKxkwbOQ7?si=oeMGXYyaTuOA02ecYFWFNw"
    },
    {
        "name": "42_Beyond_Doklam",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/42_Beyond_Doklam/CurrentAffairs-BeyondDoklam-Capsule-2of31stweek31stJulyto6thAugustof2017-1501941063.pdf",
        "spotify_link": "https://open.spotify.com/episode/1rID9nyZaBloKBJZ2kRZMC?si=9oFEdF8SQiKA4c6QvNb0Cg"
    },
    {
        "name": "43_Tri_Junction",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/43_Tri_Junction/ItemWiseEditorialDiscussion-TriJunction-1519108484.pdf",
        "spotify_link": "https://open.spotify.com/episode/3Il4hSNMxX8X6HFYx8cmXd?si=BwKuAlbKRLOzity1pwqs-w"
    },
    {
        "name": "44_India_-_China_Border_Dispute",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/44_India_-_China_Border_Dispute/ItemWiseEditorialDiscussion-India-ChinaBorderDispute-1519203527.pdf",
        "spotify_link": "https://open.spotify.com/episode/2CcCvC1WCn1iRDJ9aEuQRe?si=DWYhFVB-TmC2_3A0-f9IAA"
    },
    {
        "name": "45_MYANMAR_PRESIDENT_IN_INDIA",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/45_MYANMAR_PRESIDENT_IN_INDIA/CurrentAffairsMYANMARPRESIDENTININDIACapsule-3of35thWeek29thAugto4thSepof2016.pdf",
        "spotify_link": "https://open.spotify.com/episode/1Y7zQjYYDpQuIHDGGIXNnq?si=aIL3KWjTRUCM_ibYyhWpEA"
    },
    {
        "name": "46_Myanmar..._Press_Freedom",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/46_Myanmar..._Press_Freedom/MyanmarPressFreedom-1515669894.pdf",
        "spotify_link": "https://open.spotify.com/episode/0RwzDjbLKiXwAJgWGWLb0A?si=siQ2detNTZ2pcv0gXVO-Lw"
    },
    {
        "name": "47_Indian_PM_Visit_To_Myanmar",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/47_Indian_PM_Visit_To_Myanmar/PMVISITTOMYANMAR-1518150024.pdf",
        "spotify_link": "https://open.spotify.com/episode/0qn9FLHI9iEWqbZ0MQxv3B?si=ONnfpbDdS0SGiilYN3gHjw"
    },
    {
        "name": "48_New_Era_in_myanmar",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/48_New_Era_in_myanmar/CurrentAffairsNewsAnalysis11thWeek14thMarto20thMarof2016.pdf",
        "spotify_link": "https://open.spotify.com/episode/0832ZQUqLjH7gvz2EuulDa?si=4pAUZykTTR2Jhjq7TczXJw"
    },
    {
        "name": "49_Rohingya…_India’s_Silence",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/49_Rohingya…_India’s_Silence/ROHINGYAINDIASSILENCE-1516336109.pdf",
        "spotify_link": "https://open.spotify.com/episode/5hPk8yVZKWcuj6dkLJ3gdT?si=K64SOe2TQVCc_8hDPadIuA"
    },
    {
        "name": "50_Rohingyas_&_China_Plan",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/50_Rohingyas_&_China_Plan/ROHINGYASCHINAPLAN-1516420742.pdf",
        "spotify_link": "https://open.spotify.com/episode/4R67c5CNv92c1CNcVTQBXd?si=trBdzMn0STSur_E9_czCgA"
    },
    {
        "name": "51_Rohingya…_Various_Aspects",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/51_Rohingya…_Various_Aspects/ROHINGYAVARIOUSASPECTS-1517976858.pdf",
        "spotify_link": "https://open.spotify.com/episode/6kHujjHXIuizcZtG0k4k7s?si=Rkr2_ACYRo6ZOZL3MZYe4Q"
    },
    {
        "name": "52_India_..._Poor_Track_Record",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/52_India_..._Poor_Track_Record/3INDIAPOORTRACKRECORD-1518676232.pdf",
        "spotify_link": "https://open.spotify.com/episode/14DV5WUWZqrcnIIga8LEgM?si=aqg2xEcoSu-Dgk4YUz3nLQ"
    },
    {
        "name": "53_Rohingyas_&_Aung_San_Suu_Kyi",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/53_Rohingyas_&_Aung_San_Suu_Kyi/ItemWiseEditorialDiscussion-RohingyasAungSanSuuKyi-1518157323.pdf",
        "spotify_link": "https://open.spotify.com/episode/27ZHCcawekJWfSOO5fRgba?si=pLcXonEJSueDQu1MfRnurQ"
    },
    {
        "name": "54_Aung_San_-_Rohingyas",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/54_Aung_San_-_Rohingyas/ItemWiseEditorialDiscussion-AungSan-Rohingyas-1517297283.pdf",
        "spotify_link": "https://open.spotify.com/episode/7cwcW5VMWr2yKjEbE3SXtW?si=RByaUaDFRrW3f_wMC1Okzg"
    },
    {
        "name": "55_Sri_Lanka_Crisis_..._An_Overview",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/55_Sri_Lanka_Crisis_..._An_Overview/SriLankaCrisisAnOverview-1540809493.pdf",
        "spotify_link": "https://open.spotify.com/episode/2LDdW1xIeOwxGQPI77IHFL?si=iwf6n9m4Sjy9DmwU-ejBWQ"
    },
    {
        "name": "56_Easter_Sunday_Terror_Attacks_in_Sri_Lanka",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/56_Easter_Sunday_Terror_Attacks_in_Sri_Lanka/EasterSundayTerrorAttacksinSriLanka-1556019535.pdf",
        "spotify_link": "https://open.spotify.com/episode/1gFdL7wumLv8lrpJNIA4LH?si=DVhn9hx3SR6i7dwE7ZRb0Q"
    },
    {
        "name": "57_Reinvigorate_Neighbourhood_First",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/57_Reinvigorate_Neighbourhood_First/REINVIGORATENEIGHBOURHOODFIRST-1520507656.pdf",
        "spotify_link": "https://open.spotify.com/episode/4pWB9grFZhR7qFpbUwlchC?si=aVT3HjbKQXC8-FvgjIAp9A"
    },
    {
        "name": "58_India_-_Srilanka_..._fishermen",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/58_India_-_Srilanka_..._fishermen/EditorialDiscussion-36.pdf",
        "spotify_link": "https://open.spotify.com/episode/2Am5lD7IWAgYO3Bo9d0TdK?si=50AJ2JbYRY67FDCGzOy2lw"
    },
    {
        "name": "59_Bottom_Trawling",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/59_Bottom_Trawling/ItemWiseEditorialDiscussion-BottomTrawling-1519108145.pdf",
        "spotify_link": "https://open.spotify.com/episode/4tp1w1brFrydWkvefPTgLo?si=4JqMmGIzQ4SH6zIgkjomuA"
    },
    {
        "name": "60_Simhala_Triumphalism",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/60_Simhala_Triumphalism/SIMHALATRIUMPHALISM-1520507737.pdf",
        "spotify_link": "https://open.spotify.com/episode/00k4Gwc37AtaA139WWZHEt?si=HXh7AUatROSmWa1qYEMZOA"
    },
    {
        "name": "61_Srilanka_-_UNHRC",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/61_Srilanka_-_UNHRC/EditorialDiscussion-49.pdf",
        "spotify_link": "https://open.spotify.com/episode/1NQENaI0VCzqfdS0Yw5ber?si=jpPQC5gKSL-r7vwKTK7QKw"
    },
    {
        "name": "62_Quadrilateral_Grouping",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/62_Quadrilateral_Grouping/EditorialDiscussion-TheHindu-6thNovember2017-1509958345.pdf",
        "spotify_link": "https://open.spotify.com/episode/6ISQwIjRHcaQD07NEsFe2i?si=YMhDeyEuQl-0q9P7QoQr-g"
    },
    {
        "name": "63_SEYCHELLES_VS_MALDIVES",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/63_SEYCHELLES_VS_MALDIVES/Presentation1-1530532294.pdf",
        "spotify_link": "https://open.spotify.com/episode/05dIeWpedLaNeTmXY7QEGj?si=_ifZZhUlTMapsXhocS12Dg"
    },
    {
        "name": "64_Maldives_...Turnaround_in_Relations",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/64_Maldives_...Turnaround_in_Relations/MaldivesTurnaroundinRelations-1545300898.pdf",
        "spotify_link": "https://open.spotify.com/episode/10CUixqugicWU5GXB8TBtp?si=75q2piScQc-hIHLjjHMdlw"
    },
    {
        "name": "65_Operation_Cactus_&_Maldives",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/65_Operation_Cactus_&_Maldives/ItemWiseEditorialDiscussion-OperationCactusMaldives-1518095333.pdf",
        "spotify_link": "https://open.spotify.com/episode/6j6PhC8xLFdtIVuOfPySCy?si=rvx2SFJIRw6uRzLKptUs2g"
    },
    {
        "name": "66_Crisis_in_Maldives",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/66_Crisis_in_Maldives/ItemWiseEditorialDiscussion-CrisisinMaldives-1517918309.pdf",
        "spotify_link": "https://open.spotify.com/episode/5xncBel6AqlyiYBQrrCAQn?si=nnE6lrmYSPWLlF3ZUBZHPw"
    },
    {
        "name": "67_Maldives__China…_India",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/67_Maldives__China…_India/MaldivesChinaIndia-1515840189.pdf",
        "spotify_link": "https://open.spotify.com/episode/5Umbg1nZYmeVHGizvOLRES?si=frW2WwIyTIiacqIYyuRZsw"
    },
    {
        "name": "68_Maldives_–_India_Ties_…_Back_on_Track!",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/68_Maldives_–_India_Ties_…_Back_on_Track!/MaldivesIndiaTiesBackonTrack-1553244125.pdf",
        "spotify_link": "https://open.spotify.com/episode/6k5fSJPkdoAdaRkwrUD3hK?si=wdq6qLthRYmX4KQ4fEJl_A"
    },
    {
        "name": "69_Maldives_Elections_…_A_Ray_of_Hope_for_India!",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/69_Maldives_Elections_…_A_Ray_of_Hope_for_India!/MaldivesElectionsARayofHopeforIndia-1538043135.pdf",
        "spotify_link": "https://open.spotify.com/episode/7I4YMQd7xOJGIn3WvngBU7?si=yQz54OEnR7ukxfaMvvliqg"
    },
    {
        "name": "70_Maldives_..._India's_Neighbourhood_Policy",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/70_Maldives_..._India's_Neighbourhood_Policy/ItemWiseEditorialDiscussion-MaldivesIndiasNeighbourhoodPolicy-1518183921.pdf",
        "spotify_link": "https://open.spotify.com/episode/1Fc92QNMbxnuoC9eClJxci?si=0NYiDvneQCWoBGCYUwMtHA"
    },
    {
        "name": "71_China’s_Forays_In_IOR_…_Focus_on_India-Maldives_Ties",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/71_China’s_Forays_In_IOR_…_Focus_on_India-Maldives_Ties/CHINASFORAYSINIORFOCUSONINDIA-MALDIVESTIES-1554804619.pdf",
        "spotify_link": "https://open.spotify.com/episode/20FXxwJzo8AxMlXdAGhu4U?si=jkuawOitRACtAUXtL25aFQ"
    },
    {
        "name": "72_USA_THREAT_TO_PAKISTAN",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/72_USA_THREAT_TO_PAKISTAN/1USATHREATTOPAKISTAN-1515061702.pdf",
        "spotify_link": "https://open.spotify.com/episode/10tuAw3l9gz2fJ0UPwvZqf?si=spfkIHrzR4qzS0ALhJYvWQ"
    },
    {
        "name": "73_Eradication_of_Polio_&_Pakistan",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/73_Eradication_of_Polio_&_Pakistan/2-5-19EDITORIALFINALCOPY-pdf-Copy3-1556797550.pdf",
        "spotify_link": "https://open.spotify.com/episode/4VBsDcEH6sP6OYOhLmwOOZ?si=fTvSwMjPQAys7_bXrvieBA"
    },
    {
        "name": "74_Pakistan..._Deep_State",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/74_Pakistan..._Deep_State/CurrentAffairs-PakistanDeepState-Capsule-1of31stweek31stJulyto6thAugustof2017-1501940249.pdf",
        "spotify_link": "https://open.spotify.com/episode/1po19SgbCZQ7Vd5qN3YBHz?si=1NmkfZDCQDGHG796iPJ5Yg"
    },
    {
        "name": "75_CPEC",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/75_CPEC/CurrentAffairsCPECCapsule-3of46thWeek14thNovto20thNovof2016.pdf",
        "spotify_link": "https://open.spotify.com/episode/6VdPrBigoo8aHcaNclqbSb?si=fbzokM5nS_K_HujOafYBtg"
    },
    {
        "name": "76_Precarious_Pakistan_Economy",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/76_Precarious_Pakistan_Economy/PrecariousPakistanEconomy-1555943394.pdf",
        "spotify_link": "https://open.spotify.com/episode/5r7EG2SjD7vjKU8TkRHmWY?si=_bkItSddRSWGDFfRlK1aFQ"
    },
    {
        "name": "77_Pakistan_Affairs",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/77_Pakistan_Affairs/ItemWiseEditorialDiscussion-PakistanAffairs-1518769604.pdf",
        "spotify_link": "https://open.spotify.com/episode/3Zt2DdmUdXARZS8EV6TNnO?si=fTjInkUxSL-BXtg7Sz10dg"
    },
    {
        "name": "78_Pakistan..._Military_Upper_Hand",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/78_Pakistan..._Military_Upper_Hand/PAKISTANMILITARYUPPERHAND-1516419627.pdf",
        "spotify_link": "https://open.spotify.com/episode/01A3RYmcJksAACfpIelzpM?si=NTbp3vUjTayvOIDuaW_U-A"
    },
    {
        "name": "79_Assertive_China_..._Hostile_Pakistan",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/79_Assertive_China_..._Hostile_Pakistan/Presentation1-1518594418.pdf",
        "spotify_link": "https://open.spotify.com/episode/7nuQSynEvAAI2gHe3L1HGa?si=rTVV7sN4TcCRZjF0Fpv13A"
    },
    {
        "name": "80_Grey_List__FATF_&_Pakistan",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/80_Grey_List__FATF_&_Pakistan/GreyListFATFPakistan-1520248160.pdf",
        "spotify_link": "https://open.spotify.com/episode/5xDWl6Md0fRUSPGLSDJg1Z?si=cmury-FuQt-IHr6lOaEmOw"
    },
    {
        "name": "82_AFGHAN_PRESIDENT_IN_INDIA",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/82_AFGHAN_PRESIDENT_IN_INDIA/CurrentAffairsAFGHANPRESIDENTININDIACapsule-3of37thWeek12thSeptto18thSeptof2016.pdf",
        "spotify_link": "https://open.spotify.com/episode/06g4zrvrt2l9KYFl20R5Gt?si=zbs4_ca2RRKHidVXd7XR8Q"
    },
    {
        "name": "83_Afghanistan_&_Taliban",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/83_Afghanistan_&_Taliban/Editorial-23-7-2018-2-1532344152.pdf",
        "spotify_link": "https://open.spotify.com/episode/0eu7wkJpQouDJINffZlW2R?si=4p7CkLluT82GcGBTMBithA"
    },
    {
        "name": "84_Afghanistan…_Civilian_Deaths",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/84_Afghanistan…_Civilian_Deaths/AFGHANISTANCIVILIANDEATHS-1517545364.pdf",
        "spotify_link": "https://open.spotify.com/episode/0hJAVAIzOH6n4qlTRMWRLi?si=ud8kjittSIaJGIyBXpxfng"
    },
    {
        "name": "86_India_-_Afghanistan",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/86_India_-_Afghanistan/ItemWiseEditorialDiscussion-India-Afghanistan-1518071968.pdf",
        "spotify_link": "https://open.spotify.com/episode/4sVF0Y0zyhBI6pq49KuQ03?si=iOOjrnMbRfmezAIeh4c1HA"
    },
    {
        "name": "87_Afghanistan_Policy_of_USA",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/87_Afghanistan_Policy_of_USA/ItemWiseEditorialDiscussion-AfghanistanPolicyofUSA-1518420344.pdf",
        "spotify_link": "https://open.spotify.com/episode/5ePgIc4nn3cihZAmkMgevu?si=ceqnpQQDSpyuMdi3oimZUg"
    },
    {
        "name": "89_India_Should_Involve_in_Afghanistan_Transition",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/89_India_Should_Involve_in_Afghanistan_Transition/IndiaShouldInvolveinAfghanistanTransition-1547802080.pdf",
        "spotify_link": "https://open.spotify.com/episode/2uZI0VU1J6goTwuEzk7B9t?si=fv0m9NFATjyePV-4dibiLQ"
    },
    {
        "name": "90_RUSSIA_INDIA_REVIVING_OLD_TIES",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/90_RUSSIA_INDIA_REVIVING_OLD_TIES/CurrentAffairsRUSSIAINDIAREVIVINGOLDTIESCapsule-2of41stWeek10thOctto16thOctof201.pdf",
        "spotify_link": "https://open.spotify.com/episode/7uRcpQ1ofAe2dCsQO68qb1?si=de2ZBZdjRZqtfMyo9uBbsA"
    },
    {
        "name": "91_Russian_Revolution…Impact",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/91_Russian_Revolution…Impact/RUSSIANREVOLUTIONIMPACT-1517284772.pdf",
        "spotify_link": "https://open.spotify.com/episode/7tQpTupyVINLxwo6HNHQnv?si=fzLuyIB3SgaRcZVnqowKQg"
    },
    {
        "name": "92_USA__NATO__UK__Russia_&_Helsinki",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/92_USA__NATO__UK__Russia_&_Helsinki/USANATOUKRussiaHelsinki-1531996849.pdf",
        "spotify_link": "https://open.spotify.com/episode/6YZxg0crSXMdBJfbOHfO0C?si=h8l8Fa0oRpexELKT79RD2Q"
    },
    {
        "name": "93_USA_&_Russia",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/93_USA_&_Russia/ItemWiseEditorialDiscussion-USARussia-1518767312.pdf",
        "spotify_link": "https://open.spotify.com/episode/6QDZYwgZlXyQTAeIDXXh8b?si=ipnq4cdkQdW5q6thdxiYBg"
    },
    {
        "name": "94_Ukraine_&_Russia",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/94_Ukraine_&_Russia/TensionsbetweenUkraineRussia-1543573772.pdf",
        "spotify_link": "https://open.spotify.com/episode/7eUjlcICfY3w3Vsi7xCxdu?si=MtKKAmxGSOiFZ41STCdnyQ"
    },
    {
        "name": "95_India-USA-Russia_..._A_Comparison",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/95_India-USA-Russia_..._A_Comparison/India-USA-RussiaAComparision-1540463755.pdf",
        "spotify_link": "https://open.spotify.com/episode/4rbxD7GOUq39LoxZfHeVNw?si=QxFk2j-ETQ6kOypQjQYGZQ"
    },
    {
        "name": "96_Sanctions_on_Russia",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/96_Sanctions_on_Russia/EditorialDiscussion-1.pdf",
        "spotify_link": "https://open.spotify.com/episode/1VGLRKywEGqWLuG3vSDUtF?si=IT8DLDpcSHGE3gaKR8mklw"
    },
    {
        "name": "97_Japan...Moving_Towards_China__Russia",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/97_Japan...Moving_Towards_China__Russia/JapanMovingTowardsChinaRussia-1546851754.pdf",
        "spotify_link": "https://open.spotify.com/episode/1mtFsLRSr3ZHHN0wzKfLcw?si=sFMu5qreR-eNJPUmysa3Ag"
    },
    {
        "name": "98_India_–_Russia_Defence_Relations_…_A_Comprehensive_View",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/98_India_–_Russia_Defence_Relations_…_A_Comprehensive_View/IndiaRussiaDefenceRelationsAComprehensiveView-1539083661.pdf",
        "spotify_link": "https://open.spotify.com/episode/2B567gFKJnsqNvZk06S3Nx?si=kNTZzQJbRGWdefISv3osHQ"
    },
    {
        "name": "99_Expulsion_of_Diplomats",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/99_Expulsion_of_Diplomats/ItemWiseEditorialDiscussion-ExpulsionofDiplomats-1521453801.pdf",
        "spotify_link": "https://open.spotify.com/episode/2A1JbwG1qm0lJXlBuFSeOv?si=s-SoQfKERtS22wrGGCOaLQ"
    },
    {
        "name": "100_Tham_Luang_Cave_Rescue_..._Attitude",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/100_Tham_Luang_Cave_Rescue_..._Attitude/ThamLuangCaveRescueAttitude-1533296378.pdf",
        "spotify_link": "https://open.spotify.com/episode/5tiBSRcTExH4LtOjugZCqB?si=OI0Scet-QUuJ73yB8-hiXg"
    },
    {
        "name": "101_Item_Wise_Editorial_Discussion_-_UHC_&_Cuba__Thailand__UK",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/101_Item_Wise_Editorial_Discussion_-_UHC_&_Cuba__Thailand__UK/ItemWiseEditorialDiscussion-UHCCubaThailandUK-1518072730.pdf",
        "spotify_link": "https://open.spotify.com/episode/0AgWdOMexEc01gBBX3Zdn7?si=THPYB21TS6uVBhXB6N8iOg"
    },
    {
        "name": "103_Male_Preference_&_Asia",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/103_Male_Preference_&_Asia/Editorial46-29-3-2018-6-1522319576.pdf",
        "spotify_link": "https://open.spotify.com/episode/33v8JJspXIi22vJEHcKaSw?si=VTLBi03VQzuUDM_DaGK3AA"
    },
    {
        "name": "104_North_Korea_in_Need_of_Chinese_Help!",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/104_North_Korea_in_Need_of_Chinese_Help!/NorthKoreainNeedofChineseHelp-1547112298.pdf",
        "spotify_link": "https://open.spotify.com/episode/71UdES3Ay0P4LSJ91bX5HP?si=YtwFkJRvRLulPlGybseLmw"
    },
    {
        "name": "105_Lion_Air_crash_in_Indonesia",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/105_Lion_Air_crash_in_Indonesia/CurrentAffairs-WhyHow-11thWeekof2019-1553089077.pdf",
        "spotify_link": "https://open.spotify.com/episode/6O163X4tNUyffa8V22VzYp?si=lHrRdkXnQracvLSEdLlVmg"
    },
    {
        "name": "106_Indonesia",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/106_Indonesia/EditorialDiscussion-TheHindu-9thOctober2017-1507539792.pdf",
        "spotify_link": "https://open.spotify.com/episode/5atRq1xXwLrxBPeEF3liaD?si=f6NAQUkwQGu479EvA0erkA"
    },
    {
        "name": "107_UHC_..._Philippines_example",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/107_UHC_..._Philippines_example/UHCPhilippinesExample-1540810822.pdf",
        "spotify_link": "https://open.spotify.com/episode/5fiFG2PoLU8pYDFrMXWK7n?si=hlz2dg0PR3Cp9WsKM_A2EQ"
    },
    {
        "name": "108_Drug_Control_Global_Experience",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/108_Drug_Control_Global_Experience/DrugControlGlobalExperience-1531479371.pdf",
        "spotify_link": "https://open.spotify.com/episode/18Aiwqr4YmQfKI9QMHq5Gx?si=aKT6cy7GSIOVnS2qLEn60g"
    },
    {
        "name": "109_Impetus_to_Act_East_Policy",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/109_Impetus_to_Act_East_Policy/EditorialDiscussion-TheHindu-14thNovember2017-1510649398.pdf",
        "spotify_link": "https://open.spotify.com/episode/2XeoBCx8vVzDU7GJ1UZtlD?si=5J8MwE1dQcanTS6wEHAZ5Q"
    },
    {
        "name": "110_ONE_-_CHINA_POLICY",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/110_ONE_-_CHINA_POLICY/CurrentAffairsONE-CHINAPOLICYCapsule-2of1stWeek2ndJanto8thJanof2017.pdf",
        "spotify_link": "https://open.spotify.com/episode/09mQjBqx3L9HNv24c7nlPr?si=vTcXJvVlT8q8cftzcBkmng"
    },
    {
        "name": "111_China_–_Taiwan_Relations_&_Donald_Trump",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/111_China_–_Taiwan_Relations_&_Donald_Trump/ChinaTaiwanRelationsDonaldTrump-1544181375.pdf",
        "spotify_link": "https://open.spotify.com/episode/2zsfhQZMgR8DP07jkOiWmd?si=9HkvDk6qQsS337PEoEP69A"
    },
    {
        "name": "112_Modi_in_Japan",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/112_Modi_in_Japan/CurrentAffairsPMinJapanCapsule-3of45thWeek7thNovto13thNovof2016.pdf",
        "spotify_link": "https://open.spotify.com/episode/0vLyqtwHCtEdfObxz5qg1Z?si=VsGmOWeqQeGqvUPQ_7siBg"
    },
    {
        "name": "113_Japan_..._Pacifist_Constitution",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/113_Japan_..._Pacifist_Constitution/ItemWiseEditorialDiscussion-JapanPacifistConstitution-1517469903.pdf",
        "spotify_link": "https://open.spotify.com/episode/5z3wzytTYiehjCHZUXXZ3R?si=3LG23f1KRWWGWKA-wh24qw"
    },
    {
        "name": "114_Abenomics_&_Japan",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/114_Abenomics_&_Japan/ABENOMICSJAPAN-1517374267.pdf",
        "spotify_link": "https://open.spotify.com/episode/1qJYddbyt5514ribtJq4Jk?si=u3T9TshTRjiIeoVXWjgJ_g"
    },
    {
        "name": "116_India_-_Japan_..._Joint_Statement",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/116_India_-_Japan_..._Joint_Statement/ItemWiseEditorialDiscussion-India-JapanJointStatement-1517988415.pdf",
        "spotify_link": "https://open.spotify.com/episode/2LJVfnG2nuFBNsNHkO8NOp?si=Th_gvzjnTXCvqbEDGsBEfA"
    },
    {
        "name": "117_Japan_Coming_Closer_to_China",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/117_Japan_Coming_Closer_to_China/JapanComingClosertoChina-1540809672.pdf",
        "spotify_link": "https://open.spotify.com/episode/218udMoqeUG2UCYIXz2kAw?si=vpuIAb1eQk6w_nZqOknFyg"
    },
    {
        "name": "118_India_-_Japan_...A_Comprehensive_View",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/118_India_-_Japan_...A_Comprehensive_View/India-JapanAComprehensiveView-1540896613.pdf",
        "spotify_link": "https://open.spotify.com/episode/5ZDwoxush9x0hOL5AyoFeh?si=eLc7yd8kSdyRnMUGdgtGXw"
    },
    {
        "name": "119_North_Korea_in_Need_of_Chinese_Help!",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/119_North_Korea_in_Need_of_Chinese_Help!/NorthKoreainNeedofChineseHelp-1547112298.pdf",
        "spotify_link": "https://open.spotify.com/episode/5b1ZoPzyYwRpo1YGtXuj8t?si=_6IDJQ_0QbG7BSk3ExNmFw"
    },
    {
        "name": "120_Sanctions_On_North_Korea",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/120_Sanctions_On_North_Korea/3SanctionsonNorthKorea-1515220815.pdf",
        "spotify_link": "https://open.spotify.com/episode/2EThYckOWtc495smlG9zx1?si=BKzsZKi2Sna0niozAkak8g"
    },
    {
        "name": "121_North_Korea_&_USA",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/121_North_Korea_&_USA/ItemWiseEditorialDiscussion-NorthKoreaUSA-1519201460.pdf",
        "spotify_link": "https://open.spotify.com/episode/5x5hKBUA1zI9OU9WJlJ4VJ?si=7mXfFLjmT5SZb5Kz1ZpjPg"
    },
    {
        "name": "122_North_Korea..._Solution",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/122_North_Korea..._Solution/NorthKoreaSolution-1515734273.pdf",
        "spotify_link": "https://open.spotify.com/episode/42tdADkMJUM63PVQLFX7H7?si=dllmcgBrQS-Bx4G9tn-xjQ"
    },
    {
        "name": "123_North_Korea_Issue..._Positive_Signs",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/123_North_Korea_Issue..._Positive_Signs/NorthKoreaPositiveSigns-1515412645.pdf",
        "spotify_link": "https://open.spotify.com/episode/0BNkQDpE19QlhfA1KbEcVJ?si=0930m7L1TiiZAcpVb2mj7w"
    },
    {
        "name": "124_North_Korea_&_USA",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/124_North_Korea_&_USA/NORTHKOREAUSA-1518149709.pdf",
        "spotify_link": "https://open.spotify.com/episode/2puxUOOngJr0PWAE7lSqHB?si=_imjygS6QIiOcIxwJIwtmw"
    },
    {
        "name": "125_North_Korea_Issue…_Solution",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/125_North_Korea_Issue…_Solution/NORTHKOREAISSUESOLUTION-1518148073.pdf",
        "spotify_link": "https://open.spotify.com/episode/2iZ2E6zO1TiaiTWPt2Mtfx?si=yE7m728tQ2e0B1oqF2Dyug"
    },
    {
        "name": "127_NEW_REGIME_IN_SOUTH_KOREA",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/127_NEW_REGIME_IN_SOUTH_KOREA/MiniCapsule-008-1494510995.pdf",
        "spotify_link": "https://open.spotify.com/episode/5K42f8o83Soz0yfNxzopNb?si=IuHRmJl7SweebHkI_SNJ0A"
    },
    {
        "name": "128_End_of_Chapter",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/128_End_of_Chapter/EditorialDiscussion-38.pdf",
        "spotify_link": "https://open.spotify.com/episode/5C0Mnw3hoYVPkS81xQ3Rp4?si=Yjjx4Qi1Rnyu4Zc_3gMrFQ"
    },
    {
        "name": "129_Failure_of_Hanoi_Summit_..._South_Korea_Can_Step_in",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/129_Failure_of_Hanoi_Summit_..._South_Korea_Can_Step_in/FailureofHanoiSummitSouthKoreacanStepin-1551777212.pdf",
        "spotify_link": "https://open.spotify.com/episode/1q9TiSaTeHBrDmmSogOb6b?si=_0CeIOrmRzitl7X9qq9YtQ"
    },
    {
        "name": "130_Thaw_On_Korean_Peninsula",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/130_Thaw_On_Korean_Peninsula/Editorial48-3-4-2018-4-1522753364.pdf",
        "spotify_link": "https://open.spotify.com/episode/66hLmi13lGLRY4oSPnd8Km?si=PMwDfxkQQzCcpPxbdGAHjQ"
    },
    {
        "name": "131_Peace_In_Korean_Peninsula",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/131_Peace_In_Korean_Peninsula/undefined",
        "spotify_link": ""
    },
    {
        "name": "132_Big_Power_Game_for_Strategic_Islands",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/132_Big_Power_Game_for_Strategic_Islands/BigPowerGameforStrategicIslands-1542707172.pdf",
        "spotify_link": "https://open.spotify.com/episode/73VceoSiZzqlvRsyD9afDx?si=TfYVL8MTRA-yV3hesbifhw"
    },
    {
        "name": "133_Right_Wing_Extremism_..._Real_Cause_of_Worry!",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/133_Right_Wing_Extremism_..._Real_Cause_of_Worry!/RightWingExtremismRealCauseofWorry-1552920519.pdf",
        "spotify_link": "https://open.spotify.com/episode/6K8tqI5DAvF5GjsTkCr1IV?si=aA-pIxvWQmu_EH_lJjSMdg"
    },
    {
        "name": "134_Joint_MIlitary_Excersice",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/134_Joint_MIlitary_Excersice/CurrentAffairs-WhyHow-12thWeekof2019-1553691034.pdf",
        "spotify_link": "https://open.spotify.com/episode/0zNDr9S2nIxMWILjxgmkoe?si=m-qS9c8LSoeICeK80vkFqA"
    },
    {
        "name": "135_Import_of_Uranium_from_Uzbekistan",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/135_Import_of_Uranium_from_Uzbekistan/CurrentAffairs-WhyHow-3rdWeekof2019-1548248684.pdf",
        "spotify_link": "https://open.spotify.com/episode/1O07HBT5qt3xypBNXlXTUE?si=AkT-mOUiQYqabB4AhZJ-AQ"
    },
    {
        "name": "136_Iran_and_South_Asia_Policies",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/136_Iran_and_South_Asia_Policies/IRANSOUTHASIAPOLICIES-1517546051.pdf",
        "spotify_link": "https://open.spotify.com/episode/7bEKY2MKUQQTFLa3zxfEb0?si=Mg4-UNXJQ2uXGkPNsMrJeg"
    },
    {
        "name": "137_India_&_Iran",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/137_India_&_Iran/IndiaIran-1519193122.pdf",
        "spotify_link": "https://open.spotify.com/episode/1UrnPEFfT8Abfph6QHmxwL?si=NU0HW2H1Q1mVszffhR1L7Q"
    },
    {
        "name": "138_Iran_&_USA_..._Ramifications",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/138_Iran_&_USA_..._Ramifications/ItemWiseEditorialDiscussion-IranUSARamifications-1517646234.pdf",
        "spotify_link": "https://open.spotify.com/episode/7q1ipF0WTzFWZwQukrKZXV?si=C6tMfsXiSV-JEUegFeb6Tg"
    },
    {
        "name": "139_Isolation_Of_Iran",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/139_Isolation_Of_Iran/2ISOLATIONOFIRAN-1518676108.pdf",
        "spotify_link": "https://open.spotify.com/episode/3bo65IEFNBaY32J6tWAvAh?si=RYiA02PRRVmiQ3dLvjsMfQ"
    },
    {
        "name": "140_USA_Sanctions_On_Iran",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/140_USA_Sanctions_On_Iran/1USASANCTIONSONIRAN-1519016103.pdf",
        "spotify_link": "https://open.spotify.com/episode/4qBtuf9wX6LqD6p3YCcG4M?si=U_nGVPsHTJi7_0CuwFKzhQ"
    },
    {
        "name": "141_Trump_&_Iran_Nuclear_Deal",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/141_Trump_&_Iran_Nuclear_Deal/TrumpIranNuclearDeal-1517975360.pdf",
        "spotify_link": "https://open.spotify.com/episode/0oqgHJsWBVfh4LW8oTpjWS?si=4D6NpPgTRA20mCgvQ6T59Q"
    },
    {
        "name": "142_Iran_Sanctions_...Effect_on_Indian-Iran_Relations",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/142_Iran_Sanctions_...Effect_on_Indian-Iran_Relations/IranSanctionsEffectonIndian-IranRelations-1541415102.pdf",
        "spotify_link": "https://open.spotify.com/episode/1K6zaqW2Lo23AiNp7YnvXM?si=vR5oQGhhRDaKjjaJ9aFnBg"
    },
    {
        "name": "146_Australia_Group_&_Wassenaar",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/146_Australia_Group_&_Wassenaar/ItemWiseEditorialDiscussion-AustraliaGroupWassenaar-1517490626.pdf",
        "spotify_link": "https://open.spotify.com/episode/5aShIl9CFukIYmeC9nZk81?si=6PkDWgVGRbW3XPk1pdDy6w"
    },
    {
        "name": "147_Look_West_Policy",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/147_Look_West_Policy/ItemWiseEditorialDiscussion-LookWestPolicy-1518612398.pdf",
        "spotify_link": "https://open.spotify.com/episode/1fNg3aqdVIemc3bgU27xz2?si=_5rWmyx8TraCSP7k00conQ"
    },
    {
        "name": "148_India_&_UAE",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/148_India_&_UAE/EditorialDiscussion-18.pdf",
        "spotify_link": "https://open.spotify.com/episode/5W0z5ZtkVzTOht0Y4CXBc5?si=Pli0H9hJRy6M9_hEFQkW5Q"
    },
    {
        "name": "149_IS_&_Insurgency",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/149_IS_&_Insurgency/ISInsurgency-1519107714.pdf",
        "spotify_link": "https://open.spotify.com/episode/6E4knHmyVf85g5KfEQNNEx?si=xCyGBu-4TEOGVj9JzKAUUQ"
    },
    {
        "name": "150_Mosul_&_IS",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/150_Mosul_&_IS/ItemWiseEditorialDiscussion-MosulIS-1519203716.pdf",
        "spotify_link": "https://open.spotify.com/episode/3I1jVXtmkm1lLMDtRkrfH0?si=1q6IrBfhSV-9Dc0xwKqvtQ"
    },
    {
        "name": "151_Mosul_Tragedy",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/151_Mosul_Tragedy/MosulTragedy-1521713267.pdf",
        "spotify_link": "https://open.spotify.com/episode/3Y6MWWlZrmS6MdFVab54KF?si=pox2sTnFTlSVBtlf6oMMYg"
    },
    {
        "name": "152_Is_Out_Of_IRAQ..._What_Next",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/152_Is_Out_Of_IRAQ..._What_Next/ISOUTOFIRAQWHATNEXT-1515650178.pdf",
        "spotify_link": "https://open.spotify.com/episode/0grKNqCgszARFGHtGSzKPn?si=oItyL1xnRJ2HZKvv-uEoGw"
    },
    {
        "name": "153_Invasion_Of_Iraq_..._15_Years",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/153_Invasion_Of_Iraq_..._15_Years/InvasionOfIraq15Years-1523536144.pdf",
        "spotify_link": "https://open.spotify.com/episode/7uH2lOx2erPpIiCezVwKgW?si=ZK-YPkTXRkejK-nQr-sVMA"
    },
    {
        "name": "154_Retreat_of_IS_..._Kurds_issue",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/154_Retreat_of_IS_..._Kurds_issue/EditorialDiscussion-TheHindu-31stOctober2017-1509437340.pdf",
        "spotify_link": "https://open.spotify.com/episode/7FQMKz9o0rZnUKyD9Ng08r?si=lIZ1gcywQXKWU7iabMb4PQ"
    },
    {
        "name": "155_Referendum_Of_Iraqi_Kurds",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/155_Referendum_Of_Iraqi_Kurds/ReferendumOfIraqiKurds-1517977039.pdf",
        "spotify_link": "https://open.spotify.com/episode/3F9xO6lMeXEkIcdD1xwMaT?si=sD7_0nUsQHuO5CjzpemyOw"
    },
    {
        "name": "156_Islamic_State_..._Spread_of_its_Ideology",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/156_Islamic_State_..._Spread_of_its_Ideology/IslamicStateSpreadofitsIdeology-1535024247.pdf",
        "spotify_link": "https://open.spotify.com/episode/1swu1qcUrqGikuDrtvejkU?si=wghY9VT5QY2t4NdxLxKVig"
    },
    {
        "name": "157_Nobel_Peace_Prize_…_Focus_on_Sexual_Crimes",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/157_Nobel_Peace_Prize_…_Focus_on_Sexual_Crimes/NobelPeacePrizeFocusonSexualCrimes-1538996106.pdf",
        "spotify_link": "https://open.spotify.com/episode/4h66IfjbqVGRA6oUQOckmm?si=TxMZYcxnTIe-vSf1ivuuzg"
    },
    {
        "name": "158_YEMEN_FORGOTTEN_CRISIS",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/158_YEMEN_FORGOTTEN_CRISIS/CurrentAffairsYEMENFORGOTTENCRISISCapsule-5of30thWeek25thJuly-31stJulyof2016.pdf",
        "spotify_link": "https://open.spotify.com/episode/3b20A6bgJWWdDQLzAbRVlz?si=SuWehSQuT5qXk4FJ9OYHPA"
    },
    {
        "name": "159_Yemen...Forgotten_Country",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/159_Yemen...Forgotten_Country/YemenForgottenCountry-1540894846.pdf",
        "spotify_link": "https://open.spotify.com/episode/3J1KZmSp3xs5QtvXneKOYF?si=uRAtGfOrQxSOzphMiP7S6Q"
    },
    {
        "name": "160_Yemen_Civil_War…Battleground",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/160_Yemen_Civil_War…Battleground/YemenCivilWarBattleground-1516166902.pdf",
        "spotify_link": "https://open.spotify.com/episode/3n8kys3LqIgqdbHH1BUcjV?si=Ji9YgV-LTyK-7Giw-95s6A"
    },
    {
        "name": "161_West_Asia..._Three_Axes",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/161_West_Asia..._Three_Axes/CurrentAffairs-WestAsiaThreeAxes-Capsule1-28thWeek-1500103899.pdf",
        "spotify_link": "https://open.spotify.com/episode/6t0K6yMODdnkhd6O4RZiAQ?si=DAdfoEDqScKtgFH-fp9OGQ"
    },
    {
        "name": "162_Saudi_Arabia…_Arrests…_Its_Impact",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/162_Saudi_Arabia…_Arrests…_Its_Impact/SAUDIARABIAARRESTSITSIMPACT-1517284292.pdf",
        "spotify_link": "https://open.spotify.com/episode/70kFATdtUKtdDDT69dmzBC?si=ZjD0-1ohQjuCBYLBUJllCw"
    },
    {
        "name": "163_India_-_Iran_-_Saudi_Arabia",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/163_India_-_Iran_-_Saudi_Arabia/CurrentAffairsNewsAnalysis13thWeek28thMarto3rdAprilof2016.pdf",
        "spotify_link": "https://open.spotify.com/episode/3FQIWznbaKXahwut1qU0C2?si=Pwf7MEbQTdeLKm5xpMisfg"
    },
    {
        "name": "164_West_Asia..._A_Complex_Geo-Political_Theatre",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/164_West_Asia..._A_Complex_Geo-Political_Theatre/WestAsiaAComplexGeo-PoliticalTheatre-1550826316.pdf",
        "spotify_link": "https://open.spotify.com/episode/6YFkCcP55NGexQV0fqyG10?si=7hGLxJ6rQsSkYFbFaUNmiw"
    },
    {
        "name": "165_Jamal_Khashoggi_…_Much_more_than_the_Killing!",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/165_Jamal_Khashoggi_…_Much_more_than_the_Killing!/JamalKhashoggiMuchmorethantheKilling-1540202504.pdf",
        "spotify_link": "https://open.spotify.com/episode/4tBnQNPjJfVc32oDgUiGck?si=D-YbY1SWSdupizQZV6AoaQ"
    },
    {
        "name": "166_Israel_-_Saudi_Arabia_Coming_Together",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/166_Israel_-_Saudi_Arabia_Coming_Together/Israel-SaudiArabiaComingTogether-1546509941.pdf",
        "spotify_link": "https://open.spotify.com/episode/4kQIEvfy39Tr1W6wgnGyix?si=9SBUYo-sQWGZi85F_TYREw"
    },
    {
        "name": "167_USA_West_Asia_Policy_&_Saudi_Arabia",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/167_USA_West_Asia_Policy_&_Saudi_Arabia/USAWestAsiaPolicySaudiArabia-1544181125.pdf",
        "spotify_link": "https://open.spotify.com/episode/4kWBbFzhHfqLY2kGD61VXf?si=j2_QhhIERZGUs2CWplmJ6Q"
    },
    {
        "name": "168_Widening_Gulf_Among_GCC",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/168_Widening_Gulf_Among_GCC/WideningGulfAmongGCC-1545043618.pdf",
        "spotify_link": "https://open.spotify.com/episode/04AaBA7DVvmqzsjmFRmAlz?si=vEqJ7qRxTECrUi94Dz6ASg"
    },
    {
        "name": "169_Sahara_Forest_Project",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/169_Sahara_Forest_Project/STHealthEcologyEnvironment-36thWeek-Part2-1505572830.pdf",
        "spotify_link": "https://open.spotify.com/episode/0Et8fJX8ZZiIwW26ODnl2a?si=KBcayLZPR1adzZGuN8MQhg"
    },
    {
        "name": "170_Gaza_Strip_&_Israel",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/170_Gaza_Strip_&_Israel/ItemWiseEditorialDiscussionGazaStripIsrael-1522933962.pdf",
        "spotify_link": "https://open.spotify.com/episode/01ur5Mq1AsxUc9t0JbERc8?si=pWoBP6zaTLmMXrUNCw89Lg"
    },
    {
        "name": "171_ISRAEL–PALESTINE_CONFLICT",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/171_ISRAEL–PALESTINE_CONFLICT/27thWEEK2017ISRAELPALESTINECAPSULE-2-1499570154.pdf",
        "spotify_link": "https://open.spotify.com/episode/7cCeMI6ojEGlCJoKFHB15g?si=1oVIvg2ARl6NaY0WqK8QTg"
    },
    {
        "name": "172_India_-_Israel",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/172_India_-_Israel/India-Israel-1519191246.pdf",
        "spotify_link": "https://open.spotify.com/episode/4gq9uqn5cmZKN40AanSGJV?si=7ovPvP2IR9W2lLTQVkjPLQ"
    },
    {
        "name": "173_India_and_Israel_..._25_Years",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/173_India_and_Israel_..._25_Years/ItemWiseEditorialDiscussion-IndiaandIsrael25Years-1516624398.pdf",
        "spotify_link": "https://open.spotify.com/episode/0m5BivDlh8fdgycAs8CTVt?si=dAV-8tU9Qui-SZWGn_fWQg"
    },
    {
        "name": "174_Water_and_Israel",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/174_Water_and_Israel/WaterIsrael-1519193873.pdf",
        "spotify_link": "https://open.spotify.com/episode/3wrIOfiUkzk87ubf1wRkO6?si=2YxoJYscTeiCxApeeOTpcw"
    },
    {
        "name": "175_Once_again_Netanyahu!_..._Palestine_Issue_may_Become_Complex!",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/175_Once_again_Netanyahu!_..._Palestine_Issue_may_Become_Complex!/OnceagainNetanyahuPalestineIssuemayBecomeComplex-1555070284.pdf",
        "spotify_link": "https://open.spotify.com/episode/316Ro5tTTL9savWBPajEHU?si=CjynxSfoRMm27yLkKElc-Q"
    },
    {
        "name": "176_Gaza_&_Plight_of_Palestinians",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/176_Gaza_&_Plight_of_Palestinians/GazaPlightofPalestinians-1542364305.pdf",
        "spotify_link": "https://open.spotify.com/episode/3cvRgEWnRxt5TSIkooAsEN?si=esq-2UFfRz2f4epZcVfUow"
    },
    {
        "name": "177_Jerusalem_&_Israel_–_Palestine_Issue",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/177_Jerusalem_&_Israel_–_Palestine_Issue/JerusalemIsraelPalestineIssue-1515823630.pdf",
        "spotify_link": "https://open.spotify.com/episode/3cvRgEWnRxt5TSIkooAsEN?si=esq-2UFfRz2f4epZcVfUow"
    },
    {
        "name": "178_Two_-_State_Solution_Quite_Complex!",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/178_Two_-_State_Solution_Quite_Complex!/Two-StateSolutionQuiteComplex-1555496853.pdf",
        "spotify_link": "https://open.spotify.com/episode/0AgaWDZRbSdnuxZ2idZZWR?si=DXC7aR8bSUaL_xKMb9xCCQ"
    },
    {
        "name": "179_A_snapshot_on_Golan_Heights",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/179_A_snapshot_on_Golan_Heights/AsnapshotonGolanHeights-1553508209.pdf",
        "spotify_link": "https://open.spotify.com/episode/28OZvqn1ys5fLmeY618RiY?si=-IXC1yNCQKGBGPGmp8NDJw"
    },
    {
        "name": "180_Jewish_Nation_State_Law",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/180_Jewish_Nation_State_Law/JewishNationStateLaw-1532084076.pdf",
        "spotify_link": "https://open.spotify.com/episode/6h0xVwgKebtYMH8z6sOKZm?si=-U_dDz7HTEeTPiieOqq4SQ"
    },
    {
        "name": "181_UN_Vote_On_Jerusalem",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/181_UN_Vote_On_Jerusalem/JerusalemUNVote-1515213845.pdf",
        "spotify_link": "https://open.spotify.com/episode/2pOA80P9WGpiTY71WkdRwf?si=jg50E-iwSHq2HoUtQqil1g"
    },
    {
        "name": "182_India_&_Two_State_Solution",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/182_India_&_Two_State_Solution/Editorial176-12-1-2018-2-1515769229.pdf",
        "spotify_link": "https://open.spotify.com/episode/21kSjt59J02wF2K9bDvuWe?si=mxoB48ViRv-PgbO7-6fnFA"
    },
    {
        "name": "183_Jerusalem_&_Isral_-_Palestine_Issue",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/183_Jerusalem_&_Isral_-_Palestine_Issue/EditorialDiscussion-8thDecember2017-1512721130.pdf",
        "spotify_link": "https://open.spotify.com/episode/2l8HN5wfMxa2LiIzQCOll3?si=37wnLy14Tyye11XV2t37nw"
    },
    {
        "name": "184_ALEPPO_&_SYRIA_CRISIS",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/184_ALEPPO_&_SYRIA_CRISIS/CurrentAffairsALEPPOSYRIACRISISCapsule-1of1stWeek2ndJanto8thJanof2017.pdf",
        "spotify_link": "https://open.spotify.com/episode/5ZtJRazBBIvosc0rCgrYvp?si=D3QH4pncTP63_d4lfwwaCA"
    },
    {
        "name": "185_Syria_Issue_-_Kurds",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/185_Syria_Issue_-_Kurds/ItemWiseEditorialDiscussion-SyriaIssue-Kurds-1516366457.pdf",
        "spotify_link": "https://open.spotify.com/episode/3fb6QU6BirF0eylNIlSlUY?si=uVhV1pJlQQ6a81zUepKKkg"
    },
    {
        "name": "186_Syria..._End_Game",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/186_Syria..._End_Game/SYRIAENDGAME-1516420982.pdf",
        "spotify_link": "https://open.spotify.com/episode/3unjhVoePkQyJsoLVS9H5L?si=vhJNtHQPThWydi7oIhSbJw"
    },
    {
        "name": "187_Exit_of_US_Forces_from_Syria_..._The_Real_Reasons",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/187_Exit_of_US_Forces_from_Syria_..._The_Real_Reasons/ExitofUSForcesfromSyriaTheRealReasons-1545906398.pdf",
        "spotify_link": "https://open.spotify.com/episode/2nyo8GstLoW1uxXicr8F93?si=0iBOcGhYSGCY4Ee5-Q9Ytg"
    },
    {
        "name": "188_Syria_Crisis_&_Fault_Lines",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/188_Syria_Crisis_&_Fault_Lines/Editorial55-16-4-2018-1-1523874117.pdf",
        "spotify_link": "https://open.spotify.com/episode/0zApwPJEljwFTNHHacRCqj?si=v8r-s9Q_QGOJJf9GXBJh1Q"
    },
    {
        "name": "189_FAILED_COUP_IN_TURKEY",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/189_FAILED_COUP_IN_TURKEY/FAILEDCOUPINTURKEYCapsule-2of29thWeek18thJulyto24thJulyof2016.pdf",
        "spotify_link": "https://open.spotify.com/episode/7BDv1itjHWNNc41zvZv5Kn?si=Ds5QG9jFS0OSRF8dMS5c8Q"
    },
    {
        "name": "190_Turkey_at_the_Cross_Roads",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/190_Turkey_at_the_Cross_Roads/EditorialDiscussion-3.pdf",
        "spotify_link": "https://open.spotify.com/episode/5zO3phJfNK3QYfHRhztrxH?si=bOv59c17QyOgFwr2yv1q3Q"
    },
    {
        "name": "191_Turkey_Referendum",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/191_Turkey_Referendum/EditorialDiscussion-42.pdf",
        "spotify_link": "https://open.spotify.com/episode/5PDae3uzZTCKMlO6wQD3sS?si=TN7OaUfGRnC7UwtCNrX6qg"
    },
    {
        "name": "192_Turkey_.._Predisential_Republic",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/192_Turkey_.._Predisential_Republic/EditorialDiscussion-62.pdf",
        "spotify_link": "https://open.spotify.com/episode/2HXksfjxtFHotTwqUWCE6C?si=oq2y2pJXQWyl_RPBh9P1mA"
    },
    {
        "name": "193_Turkey_..__Authoritarianism",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/193_Turkey_..__Authoritarianism/EditorialDiscussion-63.pdf",
        "spotify_link": "https://open.spotify.com/episode/1g5xZcZXQMHYy1FnDJdOAE?si=VTZkH5iWRAGPftMtz4Bc1g"
    },
    {
        "name": "194_INDIA_-_TURKEY_NEW_LOW",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/194_INDIA_-_TURKEY_NEW_LOW/18thWeekIndiaTurkeyNewLow-1494078158.pdf",
        "spotify_link": "https://open.spotify.com/episode/4MFESz3x1gb5KNUVkUkCVk?si=_ccDhblSQaCbcNBPlnjDXA"
    },
    {
        "name": "195_Kurds__Kurdistan_&_Turkey",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/195_Kurds__Kurdistan_&_Turkey/Presentation1-1516884238.pdf",
        "spotify_link": "https://open.spotify.com/episode/6xrheNdgWhGae1L1c2gbCG?si=r3lCZDRWS_GedzQ9ioX2gQ"
    },
    {
        "name": "197_Ukraine_&_Russia",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/197_Ukraine_&_Russia/TensionsbetweenUkraineRussia-1543573772.pdf",
        "spotify_link": "https://open.spotify.com/episode/1D8YfZK52e1956DIszrFlo?si=AlcEkRFZQwycvi6-a5ighw"
    },
    {
        "name": "198_Cyprus_Issue",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/198_Cyprus_Issue/ItemWiseEditorialDiscussion-CyprusIssue-1519108426.pdf",
        "spotify_link": "https://open.spotify.com/episode/0rgCDQURjS0CuDUwQJKSwH?si=dhtj7en5QBaWpOYX8to6Ng"
    },
    {
        "name": "199_Lebanon…Another_Chessboard",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/199_Lebanon…Another_Chessboard/LebanonAnotherChessboard-1516773336.pdf",
        "spotify_link": "https://open.spotify.com/episode/6axMX8xpMG6rhnWwi5VKXR?si=ojKS_eIVQOuHpmXixSVkyw"
    },
    {
        "name": "200_Egypt_&_IS_Attack",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/200_Egypt_&_IS_Attack/EGYPTISATTACK-1516419496.pdf",
        "spotify_link": "https://open.spotify.com/episode/0qvmruto9MPk5m9kFjtZ0j?si=0b_LMEz-Q-y821115dawlw"
    },
    {
        "name": "201_Egypt_and_Arab_Spring",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/201_Egypt_and_Arab_Spring/EditorialDiscussion-50.pdf",
        "spotify_link": "https://open.spotify.com/episode/6kH6hpWZiU4ca85weAyUIc?si=HtgL2JmrTAW_vZLxteddnw"
    },
    {
        "name": "202_CRISIS_IN_SOUTH_SUDAN",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/202_CRISIS_IN_SOUTH_SUDAN/CRISISINSOUTHSUDANCapsule-1of29thWeek18thJulyto24thJulyof2016.pdf",
        "spotify_link": "https://open.spotify.com/episode/0SdG7pOLUhRXzAlRz56sY6?si=1NJlW77ESEuPcswK3m831A"
    },
    {
        "name": "203_Arab_Uprisings_…_But__Democratic_Transitions_Still_Elusive!",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/203_Arab_Uprisings_…_But__Democratic_Transitions_Still_Elusive!/ArabUprisingsButDemocraticTransitionsStillElusive-1556280477.pdf",
        "spotify_link": "https://open.spotify.com/episode/6dbChAXLB0a7YAUJhfxYY4?si=2xDWQSTTQdStytHS_dD9zg"
    },
    {
        "name": "204_Sudan_at_the_Crossroads",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/204_Sudan_at_the_Crossroads/SudanattheCrossroads-1555496401.pdf",
        "spotify_link": "https://open.spotify.com/episode/67rXBHfSuNaZLBge7a4Swp?si=fadMCtkNTLi3DxxOiABVCA"
    },
    {
        "name": "205_Western_Intervention_…_Chaos_And_Anarchy_!",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/205_Western_Intervention_…_Chaos_And_Anarchy_!/3-5-19EDITORIALFINALCOPY-pdf-Copy3-1556879984.pdf",
        "spotify_link": "https://open.spotify.com/episode/5RXgaN38Ix8SkZ167VTDFY?si=uptcSEFQSquha3eH-f3vUw"
    },
    {
        "name": "206_Tunisia_&_Arab_Spring",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/206_Tunisia_&_Arab_Spring/TunisiaArabSpring-1516196831.pdf",
        "spotify_link": "https://open.spotify.com/episode/2i5Syb5JIhZ5FVYNwuiJzI?si=NtW-lTXVRWWdnpE0oVtYVg"
    },
    {
        "name": "207_Violence_in_Nigeria",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/207_Violence_in_Nigeria/CurrentAffairs-WhyHow-9thWeekof2019-1551877225.pdf",
        "spotify_link": "https://open.spotify.com/episode/4tLbUE3B6KzcOj92Awd22B?si=IQbXlVk1TKG6RUc2e5Szng"
    },
    {
        "name": "208_Right_Balance_in_Human-Tech_Interface",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/208_Right_Balance_in_Human-Tech_Interface/RightBalanceinHumanTechInterface-1553244637.pdf",
        "spotify_link": "https://open.spotify.com/episode/74WXZlPyjgUcuTIWH53YG3?si=XxYfPBTUTCq_8EkETVugSQ"
    },
    {
        "name": "209_Base_for_UAE__Saudi_Arabia_and_Qatar",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/209_Base_for_UAE__Saudi_Arabia_and_Qatar/EditorialDiscussion-TheHindu-3rdOctober2017-1507021978.pdf",
        "spotify_link": "https://open.spotify.com/episode/4aJj70O0njlmfnHw98RZBI?si=KXXsYeWMSGWMoQrO2IXWdw"
    },
    {
        "name": "210__Djibouti_..._Strategic_Significance",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/210__Djibouti_..._Strategic_Significance/ItemWiseEditorialDiscussion-DjiboutiStrategicSignificance-1517903674.pdf",
        "spotify_link": "https://open.spotify.com/episode/6tkzXEi2RO205Y4evDUwk1?si=PPjIDxiSS4SSMKUjhEuRkA"
    },
    {
        "name": "211_Somalia_&_Al_-_Shabaab",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/211_Somalia_&_Al_-_Shabaab/ItemWiseEditorialDiscussion-SomaliaAl-Shabaab-1517644737.pdf",
        "spotify_link": "https://open.spotify.com/episode/2ZY5pUOkcQmKCWR5xlz7V5?si=gPS9n58RRoyfSY1CweZ4pg"
    },
    {
        "name": "212_PM_in_Tanzania_&_Kenya",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/212_PM_in_Tanzania_&_Kenya/CurrentAffairsPMinTanzaniaKenyaCapsule-2of28thWeek11thJulyto17thJulyof2016.pdf",
        "spotify_link": "https://open.spotify.com/episode/61YFneJCzwL9mqvaDD0U5a?si=kRVdijC5S8uN-xOHrtYrww"
    },
    {
        "name": "213_Kenya__Africa_&_Democracies",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/213_Kenya__Africa_&_Democracies/KenyaAfricaDemocracies-1517200040.pdf",
        "spotify_link": "https://open.spotify.com/episode/7FZ3UKtcsTRy1dpQ496kx4?si=uN8AakenT9uzvOd6T9QWIw"
    },
    {
        "name": "214_ICC_&_Africa",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/214_ICC_&_Africa/EditorialDiscussion-TheHindu-2ndNovember2017-1509614560.pdf",
        "spotify_link": "https://open.spotify.com/episode/21KbIy1DHMeCvUqrHCcUqh?si=FPUlMOsIR3G3lgui1yIKsQ"
    },
    {
        "name": "215_Zimbabwe_And_Power_Struggle",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/215_Zimbabwe_And_Power_Struggle/ZimbabweandPowerStruggle-1517035451.pdf",
        "spotify_link": "https://open.spotify.com/episode/0Wh6o3dYuzy2dh32Ve5Olp?si=z9o9kcwWTTq1JKHpNl4W3w"
    },
    {
        "name": "216_Modi_In_Mozambique",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/216_Modi_In_Mozambique/CurrentAffairsPMInMozambiqueCapsule-5of27thWeek4thJulyto10thJulyof2016.pdf",
        "spotify_link": "https://open.spotify.com/episode/2DTfF2fQXqKV7a4i2S5wBg?si=-fUww9KqQe6oh1vvOZBevw"
    },
    {
        "name": "217_PM_in_South_Africa",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/217_PM_in_South_Africa/CurrentAffairsPMinSouthAfricaCapsule-1of28thWeek11thJulyto17thJulyof2016.pdf",
        "spotify_link": "https://open.spotify.com/episode/6bPQMGx3Ru825rivNUSpvL?si=ggvqUqIjQwqid59DL-wNTA"
    },
    {
        "name": "218_South_Africa..._Corruption",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/218_South_Africa..._Corruption/SouthAfricaCorruption-1515734511.pdf",
        "spotify_link": "https://open.spotify.com/episode/6dW2Gc40HTn6vI7ryydeJS?si=NtJUL9QuQsGpogzQRuG3qw"
    },
    {
        "name": "219_Chagos_Islands_..._Moral_Defeat_for_UK",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/219_Chagos_Islands_..._Moral_Defeat_for_UK/ChagosIslandsMoralDefeatforUK-1551344912.pdf",
        "spotify_link": "https://open.spotify.com/episode/5rPzDqdWsGMdQ5QMqfOpdb?si=wZESSYLcQ12nqG6ZZks5oQ"
    },
    {
        "name": "220_SEYCHELLES_VS_MALDIVES",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/220_SEYCHELLES_VS_MALDIVES/Presentation1-1530532294.pdf",
        "spotify_link": "https://open.spotify.com/episode/5UXhsCY3zIEPSHBGKA0FcD?si=yknnsaprSTibbW_x0bnfhQ"
    },
    {
        "name": "221_SEYCHELLES's_President's_Under_water_speech",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/221_SEYCHELLES's_President's_Under_water_speech/ScienceTechnology-WhyHow-Module2-15th16thWeekof2019-1556632491.pdf",
        "spotify_link": "https://open.spotify.com/episode/5UdjY9Y5LMQ3ZPRPvUPIcd?si=QIxXshhORQ22jboxE0jo0Q"
    },
    {
        "name": "222_Slovakia_&_India_…_Sharp_Contrast!",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/222_Slovakia_&_India_…_Sharp_Contrast!/SlovakiaIndiaSharpContrast-1555943692.pdf",
        "spotify_link": "https://open.spotify.com/episode/0vHMalQKWAvtcGNr4Tqspt?si=4I3NvqtBQRyF7OTBD-iv_w"
    },
    {
        "name": "223_Right_Wing_Parties__Europe",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/223_Right_Wing_Parties__Europe/EditorialDiscussionTitles-TheHindu-18thOctober2017-1508317671.pdf",
        "spotify_link": "https://open.spotify.com/episode/0Cr4X3uXWcR0MB3gMDRvHr?si=kCiWOZn9Sj6zhafEVQQ8Vg"
    },
    {
        "name": "224_Poland_&_EU",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/224_Poland_&_EU/ItemWiseEditorialDiscussion-PolandEU-1518853099.pdf",
        "spotify_link": "https://open.spotify.com/episode/6dE92h0D9Hi6E8GKfEfHmV?si=z7R_mEt3RFabcBxyermAcw"
    },
    {
        "name": "226_Migration_Reverberations_In_Czech",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/226_Migration_Reverberations_In_Czech/MIGRATIONREVERBERATIONSINCZECH-1517463640.pdf",
        "spotify_link": "https://open.spotify.com/episode/1HpPkgqeBzSLkEXW3jwABV?si=AjEqvcZyS0aec-WnAcTX-Q"
    },
    {
        "name": "227_Germany_&_Consensus",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/227_Germany_&_Consensus/GermanyandConsensus-1516686203.pdf",
        "spotify_link": "https://open.spotify.com/episode/5srCqAlb6gKHJKUXuoUNSs?si=Y0ROLADjTyOiJoM1k3BGWA"
    },
    {
        "name": "228_Germany_..._Same_Sex_Marriage",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/228_Germany_..._Same_Sex_Marriage/ItemWiseEditorialDiscussion-GermanySameSexMarriage-1519204113.pdf",
        "spotify_link": "https://open.spotify.com/episode/6os2M3q4j3nTiR41F3CEwb?si=5RHAN4UHTOSjzc0LFkWEnQ"
    },
    {
        "name": "229_Cop_23_Summit",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/229_Cop_23_Summit/EditorialDiscussion-TheHindu-23rdNovember2017-1511425312.pdf",
        "spotify_link": "https://open.spotify.com/episode/7bDC2v6LQz17IV2kugE8zT?si=BfZxXCLxQXmUiUAOWlHVnA"
    },
    {
        "name": "230_FRENCH_LIBERALISM",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/230_FRENCH_LIBERALISM/19thweekCapsule-1-1494339948.pdf",
        "spotify_link": "https://open.spotify.com/episode/4L0fWvjJuaOYLccET7z1ue?si=5ef4wuHFS9GLcXlnCqaymQ"
    },
    {
        "name": "231_France_and_Protectionism",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/231_France_and_Protectionism/EditorialDiscussion-19.pdf",
        "spotify_link": "https://open.spotify.com/episode/7rEy2xYHQLh4uqii0UlYJq?si=HRtlK97ZQcmvzB-5na2nPw"
    },
    {
        "name": "232_France_elections",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/232_France_elections/Editorial-67-1493117398.pdf",
        "spotify_link": "https://open.spotify.com/episode/73vGEkmxlB3buaI4dv0QRa?si=tONVFBVXRJqWUm2xCiUrGw"
    },
    {
        "name": "233_Mutual_Recognition_Of_Education",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/233_Mutual_Recognition_Of_Education/Editorial41-20-3-2018-3-1521543796.pdf",
        "spotify_link": "https://open.spotify.com/episode/7oJFJdoKPI9TCoAZVqUkrv?si=9vWfuBwvRiWYfBqYxMhlcg"
    },
    {
        "name": "234_India-France_..._Multi_Polar_World",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/234_India-France_..._Multi_Polar_World/India-franceMultiPolarWorld-1520937869.pdf",
        "spotify_link": "https://open.spotify.com/episode/2gBjJdZxJnCdPPT8KlwFcw?si=cMlf33vATOupkAjQusXYjw"
    },
    {
        "name": "235_NOTRE_DAME_CATHEDRAL_…_NO_MORE_!",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/235_NOTRE_DAME_CATHEDRAL_…_NO_MORE_!/18-4-19EDITORIALFINALCOPY-pdf-Copy3-1555584836.pdf",
        "spotify_link": "https://open.spotify.com/episode/7eBetLdjRvqhGVenZMQlJ0?si=sArtVOhvQMOKk_H8NmLwYQ"
    },
    {
        "name": "236_Catalonia_&_Spain",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/236_Catalonia_&_Spain/ItemWiseEditorialDiscussion-CataloniaSpain-1518859372.pdf",
        "spotify_link": "https://open.spotify.com/episode/5MsOib0CI2mHjddXznGc0l?si=4Glr6ik8TfKVbyJTVkTUsg"
    },
    {
        "name": "237_Catalonia_..._Need_for_Dialogue",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/237_Catalonia_..._Need_for_Dialogue/ItemWiseEditorialDiscussion-CataloniaNeedforDialogue-1517903388.pdf",
        "spotify_link": "https://open.spotify.com/episode/5us4arXX5iQLd0rRfhvtXq?si=OFrgJGGuRS6EUX91Sp7eGA"
    },
    {
        "name": "238_Catalonia_Issue",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/238_Catalonia_Issue/ItemWiseEditorialDiscussion-CataloniaIssue-1517649297.pdf",
        "spotify_link": "https://open.spotify.com/episode/0DQ10SH862qj36DLkvMg3b?si=5VFvezAcQsWUPJY8psNWbw"
    },
    {
        "name": "239_Norway_Wind_Park",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/239_Norway_Wind_Park/CurrentAffairs-WhyHow-1stWeekof2019-1547025600.pdf",
        "spotify_link": "https://open.spotify.com/episode/6C4jM9Kmecl9og95grabvv?si=WeYI7reLTWKsYfCcmptl_g"
    },
    {
        "name": "240_Visit_of_Canadian_PM_to_India",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/240_Visit_of_Canadian_PM_to_India/ItemWiseEditorialDiscussion-VisitofCanadianPMtoIndia-1518791103.pdf",
        "spotify_link": "https://open.spotify.com/episode/6bq7dh3RKRys4tYXNDsaae?si=sy8ywuDkTbqHKpjQ8u8rlQ"
    },
    {
        "name": "241_Shadow_Over_Trudeau_Visit",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/241_Shadow_Over_Trudeau_Visit/SHADOWOVERTRUDEAUVISIT-1519123393.pdf",
        "spotify_link": "https://open.spotify.com/episode/1N1LmbYjgKLe3LElBhOjFI?si=rRzdfASpRMO7hHHRnoM-UQ"
    },
    {
        "name": "242_USA_&_Arms_Sale",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/242_USA_&_Arms_Sale/ItemWiseEditorialDiscussion-USAArmsSale-1516625090.pdf",
        "spotify_link": "https://open.spotify.com/episode/748kwzcNYP8ryQeGjLa87Q?si=upTh7GLrTbm0tCp6QHPeHQ"
    },
    {
        "name": "243_NATO_&_USA_VS_Others",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/243_NATO_&_USA_VS_Others/NATOUSAVSOthers-1531742447.pdf",
        "spotify_link": "https://open.spotify.com/episode/5I3WqgRcWvrLZNLqyLYrLe?si=Ayk18pIkT2yE1va4emJlow"
    },
    {
        "name": "244_USA_Desertion_..._Growing_Assertion",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/244_USA_Desertion_..._Growing_Assertion/USADesertionGrowingAssertion-1547200154.pdf",
        "spotify_link": "https://open.spotify.com/episode/0ogin5zMq1BmE72AlbV4Gc?si=qxMKOpvcR822Hb31joASfw"
    },
    {
        "name": "245_USA_&_Paris_Pact",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/245_USA_&_Paris_Pact/CurrentAffairs-USAParisPact-Capsule-2of35thWeek28thAugustto3rdSeptemberof2017-1504363951.pdf",
        "spotify_link": "https://open.spotify.com/episode/1OojSs0GqaUE0Wow5dwOGh?si=vdp_9ES9RhOiSBkKE3ULJA"
    },
    {
        "name": "246_U.S._Government_Shutdown",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/246_U.S._Government_Shutdown/USGovernmentShutdown-1548062692.pdf",
        "spotify_link": "https://open.spotify.com/episode/5SZXzAxtS5NpD4RAYxu4gf?si=E4dfd7FsTHOs_XkF5pixuw"
    },
    {
        "name": "247_Panama_Leaks",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/247_Panama_Leaks/CurrentAffairsNewsAnalysis14thWeek4thAprilto10thAprilof2016.pdf",
        "spotify_link": "https://open.spotify.com/episode/33VmC7hvsvknEAbDcJ2vwx?si=EbV8iIAtRxGTI4wvk_VBhQ"
    },
    {
        "name": "248_VENEZUELA..._IN_CRISIS",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/248_VENEZUELA..._IN_CRISIS/MiniCapsule-004-1494252539.pdf",
        "spotify_link": "https://open.spotify.com/episode/2HagjmKHvtbn74MomHzZ76?si=F_l3xoT6SQWqZ2ecrgfXYg"
    },
    {
        "name": "249_Venezuela..._Economic_Crisis",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/249_Venezuela..._Economic_Crisis/EditorialDiscussion-53.pdf",
        "spotify_link": "https://open.spotify.com/episode/63KP0pGqkyQ4ppSKOVerz3?si=M8bW7YmWSj6I02a-Pb8qdg"
    },
    {
        "name": "250_Venezuela..._on_difficult_Terrain",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/250_Venezuela..._on_difficult_Terrain/3VENEZUELAONDIFFICULTTERRAIN-1518761532.pdf",
        "spotify_link": "https://open.spotify.com/episode/3EWYZHm3R9fl7qV3lUTScb?si=cwoCa-VIRHqDvxHLdgliew"
    },
    {
        "name": "251_Venezuela_Crisis...Lessons_to_be_Learnt",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/251_Venezuela_Crisis...Lessons_to_be_Learnt/VenezuelaCrisisLessonstobeLearnt-1534159768.pdf",
        "spotify_link": "https://open.spotify.com/episode/0ItXLHKuH80uKmzYl5rTaI?si=l3T8jf0oRXyLUqw5AwvsLw"
    },
    {
        "name": "252_Venezuela_Crisis_…_Lessons_Learnt!",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/252_Venezuela_Crisis_…_Lessons_Learnt!/VenezuelaCrisisLessonsLearnt-1548667336.pdf",
        "spotify_link": "https://open.spotify.com/episode/336hkEQ5PkmB5Gq3eQIKBL?si=L0vhUQwAQHmqYLDgS7blTA"
    },
    {
        "name": "254_Julian_Assange_and_WikiLeaks",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/254_Julian_Assange_and_WikiLeaks/JulianAssangeandWikiLeaks-1555411952.pdf",
        "spotify_link": "https://open.spotify.com/episode/1B9EoSwgQn492CNw6DKBmP?si=wP2NxTazR52mGhpMv0qkqQ"
    },
    {
        "name": "255_Preferential_Trade_Agreement_(PTAs)",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/255_Preferential_Trade_Agreement_(PTAs)/EditorialDiscussion-21stAugust2017-1503305749.pdf",
        "spotify_link": "https://open.spotify.com/episode/1t5SpLQCpElHAgd60ZLTcm?si=L3qg2LrTT6iGW9r2dJ0R_A"
    },
    {
        "name": "256_Inherent_Weaknesses_in_Emerging_Economies",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/256_Inherent_Weaknesses_in_Emerging_Economies/InherentWeaknessesinEmergingEconomies-1536232733.pdf",
        "spotify_link": "https://open.spotify.com/episode/6fN4DMxqGKMQ9LbV8wP8DZ?si=7RWCRRHDSGWWXZntGJ0Fzg"
    },
    {
        "name": "257_Immediate_Neighbourhood...Transformational_Relations",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/257_Immediate_Neighbourhood...Transformational_Relations/ImmediateNeighbourhoodTransformationalRelations-1560170639.pdf",
        "spotify_link": "https://open.spotify.com/episode/1cAT9fhDHf03PrmnvDKyFc?si=TOcL3sDHS4WpG0u-hVZIvA"
    },
    {
        "name": "258_America_First_Policy_..._New_Geo_-_Political_Formations",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/258_America_First_Policy_..._New_Geo_-_Political_Formations/AmericaFirstPolicyNewGeo-PoliticalFormations-1560170878.pdf",
        "spotify_link": "https://open.spotify.com/episode/1j3BrFZ9eSty5n94SqzfpT?si=jXsXd6KHTYOnMnvbpgQdWA"
    },
    {
        "name": "260_Shanghai_Cooperation_Organisation_..._Advantages_&_Contradictions",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/260_Shanghai_Cooperation_Organisation_..._Advantages_&_Contradictions/ShanghaiCooperationOrganisationAdvantagesContradictions-1560422726.pdf",
        "spotify_link": "https://open.spotify.com/episode/6DESFWPpN7pwV6pwYPpMDX?si=c2RhAAsaQEK2PmlthwhxDg"
    },
    {
        "name": "261_Maneuvering_among_US__Russia_&_China",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/261_Maneuvering_among_US__Russia_&_China/ManeuveringAmongUSRussiaChina-1560775287.pdf",
        "spotify_link": "https://open.spotify.com/episode/6hVTr2Vjmu2L6WrP9DRBTW?si=wKpEIYL4QRatgD2fUR0kpw"
    },
    {
        "name": "262_INDIA-USA_RELATIONS_…_WHAT_WENT_WRONG",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/262_INDIA-USA_RELATIONS_…_WHAT_WENT_WRONG/INDIA-USARELATIONSWHATWENTWRONG-1560857052.pdf",
        "spotify_link": "https://open.spotify.com/episode/22rEbNQpvMXxYBS8gglyAs?si=sR0Qq6_ARAqM9em_wogGuQ"
    },
    {
        "name": "263_War_Clouds_near_Strait_of_Hormuz",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/263_War_Clouds_near_Strait_of_Hormuz/WarCloudsnearStraitofHormuz-1561116235.pdf",
        "spotify_link": "https://open.spotify.com/episode/1W2TRmVLRMFs65mhJeNxzJ?si=WS4N6lXOTdGP2Gp3HRLuHw"
    },
    {
        "name": "265_Unbalanced_Multipolarity_is_the_Reality!",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/265_Unbalanced_Multipolarity_is_the_Reality!/UnbalancedMultipolarityistheReality-1561375102.pdf",
        "spotify_link": "https://open.spotify.com/episode/0fK4CK6K4uUN2mJVH27eTJ?si=5qDxzQ1qTu-iLbUN8i2TQw"
    },
    {
        "name": "266_UNSC_High_Table...Clean_Slate_Candidate_From_India!",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/266_UNSC_High_Table...Clean_Slate_Candidate_From_India!/UNSCHighTableCleanSlateCandidateFromIndia-1561723183.pdf",
        "spotify_link": "https://open.spotify.com/episode/4TI4SyUKgXt7qkmKFMT8bV?si=Vu3_kP40TlmENkEuzIkXCw"
    },
    {
        "name": "267_G_20_…_High_on_Optics!",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/267_G_20_…_High_on_Optics!/undefined",
        "spotify_link": ""
    },
    {
        "name": "268_USA_Subverting_WTO_Framework!",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/268_USA_Subverting_WTO_Framework!/1-7-19EDITORIALFINALCOPY-pdf-Copy3-1561977764.pdf",
        "spotify_link": "https://open.spotify.com/episode/6lJvLxbv7PuiJs8P3QH7CQ?si=HgmphNqHTdKDHamT0_La5w"
    },
    {
        "name": "269_Global_War_on_Terror…_A_Failure!",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/269_Global_War_on_Terror…_A_Failure!/1-7-19EDITORIALFINALCOPY-pdf-Copy5-1561978425.pdf",
        "spotify_link": "https://open.spotify.com/episode/5JWt9Ha8IGCMBW4IaAo93i?si=qLRN2CCXSCSCDZwIeTuTeQ"
    },
    {
        "name": "270_Indo-Pacific_…_Through_The_Prisms_of_USA_&_India",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/270_Indo-Pacific_…_Through_The_Prisms_of_USA_&_India/Indo-PacificThroughThePrismsofUSAIndia-1562064754.pdf",
        "spotify_link": "https://open.spotify.com/episode/78S9G8sv1SYRvmjay04Ga0?si=U4UT4yZxRQGtd73a2IUouQ"
    },
    {
        "name": "271_Crossing_Enriched_Uranium_Limit_…_How_To_View_It",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/271_Crossing_Enriched_Uranium_Limit_…_How_To_View_It/Presentation2-1562237897.pdf",
        "spotify_link": "https://open.spotify.com/episode/5TEMZxkAMdwCAm8bjMLDx4?si=sc5L6CzoSHqUtSBE6l-BVA"
    },
    {
        "name": "272_AfCFTA…_A_New_Beginning!",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/272_AfCFTA…_A_New_Beginning!/9-7-19ItemWise-1-1562741749.pdf",
        "spotify_link": "https://open.spotify.com/episode/76Xcc2IJTN3qlpvKQzD6qz?si=Q-UzyYGjQvuOgYb1cquxow"
    },
    {
        "name": "273_Case_For_Separate_Law_For_Crimes_Against_Humanity",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/273_Case_For_Separate_Law_For_Crimes_Against_Humanity/CaseForSeparateLawForCrimesAgainstHumanity-1562672276.pdf",
        "spotify_link": "https://open.spotify.com/episode/2kt9CswYHcPkhzA0XnNfmZ?si=BWq5vT23RAuOg_DlnXLgfg"
    },
    {
        "name": "274_Kulbhushan_Jadhav_Case..._ICJ_Verdict",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/274_Kulbhushan_Jadhav_Case..._ICJ_Verdict/KulbhushanJadhavCaseICJVerdict-1563456772.pdf",
        "spotify_link": "https://open.spotify.com/episode/0mIQEZhk6J0MgQz7pQAurg?si=iXGog95VQLyGD4MRNgPBfg"
    },
    {
        "name": "276_Existential_Threat_To_WTO_…_A_Critical_Appraisal",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/276_Existential_Threat_To_WTO_…_A_Critical_Appraisal/ExistentialThreatToWTOACriticalAppraisal-1564053236.pdf",
        "spotify_link": "https://open.spotify.com/episode/2pyTUwHZvldPlVpg6nx71A?si=ygh0jh6kQAihv5xE2Bv6Bg"
    },
    {
        "name": "277_Third_Party_Mediation_On_Kashmir_Issue…_Why_Big_No",
        "pdf": "https://hemachandranss.github.io/customized-learning-space-digital/2019-international-relations-current-affairs/277_Third_Party_Mediation_On_Kashmir_Issue…_Why_Big_No/ThirdPartyMediationOnKashmirIssueWhyBigNo-1564485578.pdf",
        "spotify_link": "https://open.spotify.com/episode/0O0dza6Un5ET1vClbjwGrE?si=HQDmjqsST3OWwa1ZjuUjKQ"
    }
];
