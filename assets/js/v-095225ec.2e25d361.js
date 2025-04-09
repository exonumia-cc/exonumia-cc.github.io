"use strict";(self.webpackChunkexonumia_cc=self.webpackChunkexonumia_cc||[]).push([[7557],{77725:(e,n,a)=>{a.r(n),a.d(n,{data:()=>t});const t={key:"v-095225ec",path:"/mar/ber/understanding-lightning-network-using-an-abacus/",title:"Understanding Lightning Network using an Abacus",lang:"ber",frontmatter:{},excerpt:"",headers:[],filePathRelative:"mar/ber/understanding-lightning-network-using-an-abacus/README.md",git:{updatedTime:1744187994e3}}},34667:(e,n,a)=>{a.r(n),a.d(n,{default:()=>H});var t=a(66252),i=a(99245),o=a(83088),s=a(51330),l=a(47991),r=a(36386);const c=(0,t._)("h1",{id:"understanding-lightning-network-using-an-abacus",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#understanding-lightning-network-using-an-abacus","aria-hidden":"true"},"#"),(0,t.Uk)(" Understanding Lightning Network using an Abacus")],-1),h=(0,t.Uk)("by Roy Sheinfeld "),b={href:"https://medium.com/breez-technology/understanding-lightning-network-using-an-abacus-daad8dc4cf4bs",target:"_blank",rel:"noopener noreferrer"},d=(0,t.Uk)("2018/03/25"),u=(0,t.Uk)("I’ve received a lot of positive feedback following my previous article, "),g={href:"https://medium.com/@kingonly/the-future-of-bitcoin-3187aefe2746",target:"_blank",rel:"noopener noreferrer"},p=(0,t.Uk)("Lighting Network is the Future of Bitcoin"),m=(0,t.Uk)(". However, while reading some of the feedback, it became clear to me that some people don’t fully understand how Lightning Network (LN) actually works. In this article, I will try to demystify the concept behind LN and its payment channels using an abacus analogy, without getting into the technical specifics of LN implementation."),f=(0,t._)("p",null,"This is an abacus:",-1),k=(0,t._)("p",null,[(0,t._)("img",{src:i,alt:""})],-1),w=(0,t.Uk)("Now, think of an "),_={href:"https://cointelegraph.com/explained/lightning-network-explained#block-5",target:"_blank",rel:"noopener noreferrer"},y=(0,t.Uk)("LN’s payment channel"),v=(0,t.Uk)(" like one wire of an abacus, where the beads represent the bitcoins inside the channel. When Alice and Bob create a payment channel between them, Alice deposit bitcoins from the Blockchain inside the channel. For now, these bitcoins (e.g. 10 bits or 0.00001 BTC) belong to Alice. In this example, each bead equals one bit:"),A=(0,t._)("p",null,[(0,t._)("img",{src:o,alt:""})],-1),B=(0,t._)("p",null,"An abacus wire and a payment channel have shared characteristics:",-1),U=(0,t._)("ul",null,[(0,t._)("li",null,[(0,t._)("strong",null,"Bidirectional:"),(0,t.Uk)(" like beads on an abacus wire can be moved from left to right and vice-versa, bitcoins can be moved from Alice to Bob and vice-versa.")]),(0,t._)("li",null,[(0,t._)("strong",null,"Ownership:"),(0,t.Uk)(" in an abacus, beads can be either on the left or on the right, never in the middle of a wire. In the same manner, bitcoins in a payment channel can either belong to Alice or Bob.")]),(0,t._)("li",null,[(0,t._)("strong",null,"Fixed:"),(0,t.Uk)(" similar to the way beads cannot be added or removed from a wire, Alice and Bob can exchange bitcoins between them, up to the number that was set when opening the payment channel. If they want to exchange a larger number of bitcoins, they will have to perform another on-chain transaction.")])],-1),x=(0,t._)("p",null,"This is how the payment channel looks like after Alice sends 2 bits to Bob:",-1),L=(0,t._)("p",null,[(0,t._)("img",{src:s,alt:""})],-1),N=(0,t._)("p",null,"Alice now has 8 beads and Bob has 2 beads. Now, let’s say that Bob is also connected in LN to Carol using a 10 bit payment channel:",-1),C=(0,t._)("p",null,[(0,t._)("img",{src:l,alt:""})],-1),I=(0,t._)("p",null,"With LN, Alice can pay Carol via Bob. In the abacus analogy, if Alice wants to send 2 bits to Carol, she moves 2 beads in Alice-Bob wire to the right (to Bob), and Bob moves 2 beads in Bob-Carol wire to the right (to Carol). This is how it looks like after Alice sends Carol 2 bits:",-1),W=(0,t._)("p",null,[(0,t._)("img",{src:r,alt:""})],-1),T=(0,t._)("p",null,"It’s important to mention that if Bob agrees to participate in this transaction, he can’t accept Alice’s beads without moving the same number of beads to Carol.",-1),F=(0,t.Uk)("Using the abacus analogy, it’s easy to explain the nature of off-chain LN transactions in general, and specifically what are the requirements a payment channel needs to meet in order to process a transaction. For example, it’s easy to see how Alice can’t send Carol more beads than Bob can handle. Then again, maybe in the future she would be able to do it using "),D={href:"https://bitcoinist.com/atomic-multi-path-help-bitcoin-become-formidable-payment-instrument/",target:"_blank",rel:"noopener noreferrer"},O=(0,t.Uk)("AMPs"),R=(0,t.Uk)(", but that’s a story for another article…"),q=(0,t._)("p",null,[(0,t._)("strong",null,"If you found this article helpful, please don’t forget to add claps (long press to add multiple claps) and share it.")],-1),E={},H=(0,a(83744).Z)(E,[["render",function(e,n){const a=(0,t.up)("OutboundLink"),i=(0,t.up)("LanguageDropdown");return(0,t.wg)(),(0,t.iD)(t.HY,null,[c,(0,t._)("p",null,[h,(0,t._)("a",b,[d,(0,t.Wm)(a)])]),(0,t.Wm)(i),(0,t._)("p",null,[u,(0,t._)("a",g,[p,(0,t.Wm)(a)]),m]),f,k,(0,t._)("p",null,[w,(0,t._)("a",_,[y,(0,t.Wm)(a)]),v]),A,B,U,x,L,N,C,I,W,T,(0,t._)("p",null,[F,(0,t._)("a",D,[O,(0,t.Wm)(a)]),R]),q],64)}]])},83744:(e,n)=>{n.Z=(e,n)=>{const a=e.__vccOpts||e;for(const[e,t]of n)a[e]=t;return a}},99245:(e,n,a)=>{e.exports=a.p+"assets/img/abacus.e954b5d3.png"},83088:(e,n,a)=>{e.exports=a.p+"assets/img/alice-bob-1.a8ceae3d.png"},51330:(e,n,a)=>{e.exports=a.p+"assets/img/alice-bob-2.5607d380.png"},47991:(e,n,a)=>{e.exports=a.p+"assets/img/alice-bob-carol-1.18c2c28a.png"},36386:(e,n,a)=>{e.exports=a.p+"assets/img/alice-bob-carol-2.ee4972f5.png"}}]);