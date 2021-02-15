# 👋 Welcome to Web-App-From-Fcratch!
_Minor Web Design & Development, HvA 2021_

![](https://github.com/sjagoori/web-app-from-scratch-2021/blob/master/assets/toplist.png)

<table style="margin-left: auto; margin-right: auto;">
    <tr>
        <td align="center"><a href="#-live-demo">💻 Live demo<a></td>
        <td align="center"><a href="#-the-assignment">📓 The assignment <a></td>
        <td align="center"><a href="#-screenshots">📸 Screenshots<a></td>
        <td align="center"><a href="#-concept">📝 Concept<a></td>
        <td align="center"><a href="#-features-and-timeline">✍ Features and timeline<a></td>
        <td align="center"><a href="#-license">📝 License<a></td>
    </tr>
</table>

## 💻 Live demo
[Link](https://web-app-from-scratch-2021-one.vercel.app/)

## 📓 The assignment 
For this class, this repo will contain a SPA in the folder `/spa`. The website is written in plain javascript withtout the use of external tools or libraries (with the exception of [Routie](https://github.com/jgallen23/routie). Furthermore, it fetches data from an API and renders it using several DOM manipulation techniques.

## 📸 Screenshots
![](https://github.com/sjagoori/web-app-from-scratch-2021/blob/master/assets/toplist.png)
![](https://github.com/sjagoori/web-app-from-scratch-2021/blob/master/assets/detailpage.png)

## 📝 Concept
The main objective of this project is to render data from an API endpoint so, given what is required, I've picked the topic of cryptocurrency. Specifically the pricing and general information along with the contact information of each. For the data I will use CoinmarketCap's API, you can find their documentation [here](https://coinmarketcap.com/api/documentation/v1/). The landing of this concept will display a top list of cryptocurrencies based on their market cap. Once selected, it brings you to a detail page where you will find additional information. The used endpoints for this project are `/listings` for the top lists and `/info` for the additional infomation for each coin in the toplist. 

### Actor diagram
![](https://github.com/sjagoori/web-app-from-scratch-2021/blob/master/assets/actor%20diagram.png)

### Interaction diagram
![](https://github.com/sjagoori/web-app-from-scratch-2021/blob/master/assets/interaction%20diagram.png)


## ✍ Features and timeline
- [x] Data fetching
- [x] Data manipulation
- [x] Modular structure
- [x] Caching API using localstorage
- [x] Dynamic styling
  - [x] Seperate styling files
- [x] Dynamic detail page
  - [x] Styling
- [x] Use of Routie for rouing
- [x] Use of loading state

## 📝 License
[GPLv3](https://choosealicense.com/licenses/gpl-3.0/)
