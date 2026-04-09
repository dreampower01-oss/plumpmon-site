import { Coffee, Utensils, MapPin, Clock, Camera, MessageCircle, Mail } from 'lucide-react';

function App() {
  const menuItems = [
    { name: "自家焙煎ブレンド", price: "¥550", category: "DRINK" },
    { name: "季節のシングルオリジン", price: "¥650", category: "DRINK" },
    { name: "抹茶ラテ", price: "¥600", category: "DRINK" },
    { name: "ふわふわ厚切りトースト", price: "¥450", category: "FOOD" },
    { name: "クラシック・プリン", price: "¥500", category: "FOOD" },
    { name: "自家製スコーン", price: "¥400", category: "FOOD" },
  ];

  return (
    <div className="min-h-screen bg-[#faf9f6] text-[#4a4a4a] font-sans">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50 border-b border-stone-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Coffee className="text-[#8c7355]" />
            <span className="text-xl font-serif font-bold tracking-widest text-[#5c4a33]">プランプモン</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium tracking-wide">
            <a href="#about" className="hover:text-[#8c7355] transition-colors">ABOUT</a>
            <a href="#menu" className="hover:text-[#8c7355] transition-colors">MENU</a>
            <a href="#contact" className="hover:text-[#8c7355] transition-colors">CONTACT</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-[#5c4a33] overflow-hidden">
        {/* Background Video (Direct Link) */}
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-50 pointer-events-none"
        >
          <source src="https://player.vimeo.com/external/494191316.sd.mp4?s=4477c44d0362c3f8e5605d513813898c19957f86&profile_id=165&oauth2_token_id=57447761" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="relative text-center text-white px-6">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 tracking-tight">心地よい一杯を。</h1>
          <p className="text-lg md:text-xl font-light tracking-widest mb-10">穏やかな時間が流れる、街角の小さなカフェ</p>
          <a href="#menu" className="inline-block border border-white px-8 py-3 text-sm tracking-[0.2em] hover:bg-white hover:text-[#5c4a33] transition-all">
            VIEW MENU
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-serif font-bold mb-12 text-[#5c4a33]">わたしたちについて</h2>
        <p className="leading-relaxed mb-8 text-lg">
          プランプモンは、忙しい日常の中でふと一息つける場所を目指しています。
          厳選した豆を店内で丁寧に焙煎し、一杯一杯真心を込めてお淹れします。
        </p>
        <div className="grid md:grid-cols-2 gap-12 mt-16 text-left">
          <div className="bg-white p-8 border border-stone-100 shadow-sm">
            <h3 className="font-bold mb-4 flex items-center gap-2">
              <Coffee className="w-5 h-5 text-[#8c7355]" />
              こだわりのコーヒー
            </h3>
            <p className="text-sm leading-relaxed text-stone-500">
              世界中から選りすぐった高品質な生豆を、その個性が最も引き立つように絶妙な加減で焙煎しています。
            </p>
          </div>
          <div className="bg-white p-8 border border-stone-100 shadow-sm">
            <h3 className="font-bold mb-4 flex items-center gap-2">
              <Utensils className="w-5 h-5 text-[#8c7355]" />
              手作りのお菓子
            </h3>
            <p className="text-sm leading-relaxed text-stone-500">
              コーヒーとの相性を第一に考えた、甘さ控えめで素材の味を活かした自家製スイーツをご用意しています。
            </p>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-24 bg-[#f3f1ed]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-serif font-bold mb-16 text-center text-[#5c4a33]">メニュー</h2>
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
            <div>
              <h3 className="text-xs tracking-[0.3em] font-bold text-stone-400 mb-8 pb-2 border-b">DRINK</h3>
              {menuItems.filter(i => i.category === "DRINK").map(item => (
                <div key={item.name} className="flex justify-between items-baseline mb-6">
                  <span className="font-medium">{item.name}</span>
                  <span className="text-stone-400 text-sm">{item.price}</span>
                </div>
              ))}
            </div>
            <div>
              <h3 className="text-xs tracking-[0.3em] font-bold text-stone-400 mb-8 pb-2 border-b">FOOD</h3>
              {menuItems.filter(i => i.category === "FOOD").map(item => (
                <div key={item.name} className="flex justify-between items-baseline mb-6">
                  <span className="font-medium">{item.name}</span>
                  <span className="text-stone-400 text-sm">{item.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-serif font-bold mb-8 text-[#5c4a33]">インフォメーション</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <MapPin className="text-[#8c7355] shrink-0" />
                <div>
                  <p className="font-bold">ADDRESS</p>
                  <p className="text-stone-500">東京都◯◯区△△町 1-2-3</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Clock className="text-[#8c7355] shrink-0" />
                <div>
                  <p className="font-bold">OPENING HOURS</p>
                  <p className="text-stone-500">Mon - Sat: 9:00 - 19:00</p>
                  <p className="text-stone-500">Sun & Holiday: 10:00 - 18:00</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Mail className="text-[#8c7355] shrink-0" />
                <div>
                  <p className="font-bold">CONTACT</p>
                  <p className="text-stone-500">info@clamcafe.example.com</p>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[400px] bg-stone-200 bg-[url('https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=1747')] bg-cover bg-center">
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-stone-200 text-center">
        <div className="flex justify-center gap-6 mb-8">
          <Camera className="w-5 h-5 text-stone-400 hover:text-[#8c7355] cursor-pointer" />
          <MessageCircle className="w-5 h-5 text-stone-400 hover:text-[#8c7355] cursor-pointer" />
        </div>
        <p className="text-xs text-stone-400 tracking-widest">&copy; 2026 プランプモン. ALL RIGHTS RESERVED.</p>
      </footer>
    </div>
  );
}

export default App;
