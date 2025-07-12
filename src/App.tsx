import React, { useState, useEffect } from 'react';
import { 
  ChevronDown, 
  Clock, 
  Users, 
  TrendingUp, 
  Shield, 
  CheckCircle, 
  ArrowRight,
  MessageCircle,
  Calendar,
  Target,
  Zap,
  Heart,
  Brain,
  Phone,
  Mail,
  MapPin,
  Star,
  AlertTriangle,
  DollarSign,
  UserCheck,
  Headphones,
  FileText,
  BarChart3,
  Building,
  GraduationCap,
  ShoppingBag,
  Wrench,
  User,
  UtensilsCrossed,
  Briefcase,
  Ticket,
  CreditCard,
  Users2,
  Globe,
  Palette,
  Bot,
  ArrowDownRight,
  MousePointer,
  Smartphone,
  Monitor,
  PaintBucket,
  Image,
  Type,
  Layout,
  Navigation,
  Sparkles,
  Layers,
  Cpu,
  Database,
  Settings,
  Award,
  TrendingDown,
  Activity,
  BarChart,
  PieChart,
  LineChart,
  Home,
  Camera,
  Video,
  Mic,
  Send,
  Download,
  Upload,
  Share2,
  Link,
  Eye,
  EyeOff,
  Lock,
  Unlock,
  Key,
  Search,
  Filter,
  Sort,
  Grid,
  List,
  Map,
  Compass,
  Route,
  Flag,
  Bookmark,
  Tag,
  Hash,
  AtSign,
  Percent,
  Plus,
  Minus,
  X,
  Check,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  Play,
  Pause,
  Square,
  SkipBack,
  SkipForward,
  Volume2,
  VolumeX,
  Wifi,
  WifiOff,
  Battery,
  BatteryLow,
  Signal,
  Bluetooth,
  Usb,
  HardDrive,
  Server,
  Cloud,
  CloudOff,
  Folder,
  FolderOpen,
  File,
  FileText as FileTextIcon,
  FilePlus,
  FileX,
  Save,
  Edit,
  Edit2,
  Edit3,
  Copy,
  Cut,
  Paste,
  Trash,
  Trash2,
  RotateCcw,
  RotateCw,
  RefreshCw,
  RefreshCcw,
  Maximize,
  Minimize,
  Maximize2,
  Minimize2,
  Move,
  MousePointer2,
  Hand,
  Grab,
  ZoomIn,
  ZoomOut,
  Focus,
  Crosshair,
  Aperture,
  Sun,
  Moon,
  Sunrise,
  Sunset,
  CloudRain,
  CloudSnow,
  CloudLightning,
  Wind,
  Thermometer,
  Droplets,
  Umbrella,
  Coffee,
  Pizza,
  ShoppingCart,
  CreditCard as CreditCardIcon,
  Banknote,
  Coins,
  Wallet,
  Receipt,
  Calculator,
  Scale,
  Ruler,
  Scissors,
  Paperclip,
  Pin,
  Pushpin,
  Magnet,
  Anchor,
  Feather,
  Pen,
  PenTool,
  Brush,
  Eraser,
  Highlighter,
  Marker,
  Stamp,
  Sticker,
  Palette as PaletteIcon,
  Pipette,
  Contrast,
  Gamma,
  Sliders,
  ToggleLeft,
  ToggleRight,
  Power,
  PowerOff,
  Plug,
  Unplug,
  Cable,
  Router,
  Antenna,
  Radio,
  Tv,
  Monitor as MonitorIcon,
  Laptop,
  Tablet,
  Smartphone as SmartphoneIcon,
  Watch,
  Gamepad,
  Gamepad2,
  Joystick,
  Dice1,
  Dice2,
  Dice3,
  Dice4,
  Dice5,
  Dice6,
  Spade,
  Club,
  Heart as HeartIcon,
  Diamond,
  Crown,
  Trophy,
  Medal,
  Ribbon,
  Gift,
  PartyPopper,
  Cake,
  Candle,
  Flame,
  Lightbulb,
  Flashlight,
  Lamp,
  LampCeiling,
  LampDesk,
  LampFloor,
  LampWallDown,
  LampWallUp,
  Sofa,
  Bed,
  Bath,
  Toilet,
  Shower,
  Sink,
  Refrigerator,
  Microwave,
  Oven,
  Toaster,
  Blender,
  ChefHat,
  Utensils,
  ForkKnife,
  Spoon,
  Knife,
  Plate,
  Bowl,
  Cup,
  Wine,
  Beer,
  Martini,
  Cocktail,
  Milk,
  Egg,
  Apple,
  Banana,
  Cherry,
  Grape,
  Orange,
  Strawberry,
  Carrot,
  Corn,
  Pepper,
  Tomato,
  Potato,
  Onion,
  Garlic,
  Mushroom,
  Broccoli,
  Lettuce,
  Cucumber,
  Avocado,
  Lemon,
  Lime,
  Coconut,
  Pineapple,
  Watermelon,
  Peach,
  Pear,
  Plum,
  Kiwi,
  Mango,
  Papaya,
  Pomegranate,
  Tangerine,
  Fish,
  Beef,
  Poultry,
  Pork,
  Bacon,
  Ham,
  Sausage,
  Sandwich,
  Burger,
  Fries,
  Hotdog,
  Taco,
  Burrito,
  Wrap,
  Salad,
  Soup,
  Ramen,
  Spaghetti,
  Pretzel,
  Bagel,
  Croissant,
  Donut,
  Cookie,
  Candy,
  Chocolate,
  IceCream,
  Lollipop,
  Honey,
  Jam,
  Butter,
  Cheese,
  Bread,
  Baguette,
  Wheat,
  Rice,
  Corn as CornIcon,
  Nut,
  Seed,
  Bean,
  Herb,
  Leaf,
  Flower,
  Flower2,
  Tulip,
  Rose,
  Sunflower,
  Daisy,
  Lotus,
  Cactus,
  PalmTree,
  Pine,
  Evergreen,
  Deciduous,
  Bamboo,
  Grass,
  Clover,
  Shamrock,
  FourLeafClover,
  Sprout,
  Seedling,
  Sapling,
  Tree,
  Forest,
  Mountain,
  Hill,
  Volcano,
  Desert,
  Beach,
  Island,
  Lake,
  River,
  Waterfall,
  Ocean,
  Wave,
  Snowflake,
  Snowman,
  IceCube,
  Icicles,
  Glacier,
  Aurora,
  Rainbow,
  Lightning,
  Tornado,
  Hurricane,
  Cyclone,
  Meteor,
  Comet,
  Star as StarIcon,
  Sparkle,
  Fireworks,
  Confetti,
  Balloon,
  Streamer,
  Flag as FlagIcon,
  Pennant,
  Banner,
  Sign,
  Signpost,
  Milestone,
  Waypoint,
  Checkpoint,
  Finish,
  Start,
  Goal,
  Bullseye,
  Dart,
  Bow,
  Sword,
  Shield as ShieldIcon,
  Helmet,
  Armor,
  Gauntlets,
  Boots,
  Cloak,
  Robe,
  Dress,
  Shirt,
  Pants,
  Shorts,
  Skirt,
  Jacket,
  Coat,
  Hoodie,
  Sweater,
  Vest,
  Tie,
  Bowtie,
  Scarf,
  Gloves,
  Mittens,
  Socks,
  Shoes,
  Sneakers,
  Sandals,
  Heels,
  Hat,
  Cap,
  Beanie,
  Beret,
  Crown as CrownIcon,
  Tiara,
  Headband,
  Glasses,
  Sunglasses,
  Goggles,
  Mask,
  Mustache,
  Beard,
  Lips,
  Tooth,
  Tongue,
  Nose,
  Ear,
  Eye as EyeIcon,
  Brain as BrainIcon,
  Skull,
  Bone,
  Footprints,
  Paw,
  Hoofprint,
  Fingerprint,
  Hand as HandIcon,
  Thumbs,
  Peace,
  Victory,
  Fist,
  Punch,
  Clap,
  Wave as WaveIcon,
  Salute,
  Pray,
  Namaste,
  Handshake,
  Hug,
  Kiss,
  Love,
  Broken,
  Mended,
  Bandage,
  Pill,
  Syringe,
  Stethoscope,
  Thermometer as ThermometerIcon,
  Bandaid,
  Crutch,
  Wheelchair,
  Ambulance,
  Hospital,
  Clinic,
  Pharmacy,
  Doctor,
  Nurse,
  Patient,
  Surgery,
  Xray,
  Scan,
  Test,
  Lab,
  Microscope,
  Telescope,
  Binoculars,
  Magnifier,
  Lens,
  Prism,
  Crystal,
  Gem,
  Diamond as DiamondIcon,
  Ruby,
  Emerald,
  Sapphire,
  Pearl,
  Gold,
  Silver,
  Bronze,
  Copper,
  Iron,
  Steel,
  Aluminum,
  Titanium,
  Platinum,
  Lead,
  Tin,
  Zinc,
  Nickel,
  Cobalt,
  Chromium,
  Manganese,
  Tungsten,
  Uranium,
  Plutonium,
  Radium,
  Helium,
  Neon,
  Argon,
  Krypton,
  Xenon,
  Radon,
  Hydrogen,
  Oxygen,
  Nitrogen,
  Carbon,
  Sulfur,
  Phosphorus,
  Chlorine,
  Fluorine,
  Bromine,
  Iodine,
  Sodium,
  Potassium,
  Calcium,
  Magnesium,
  Lithium,
  Beryllium,
  Boron,
  Silicon,
  Arsenic,
  Selenium,
  Tellurium,
  Polonium,
  Astatine,
  Francium,
  Radium as RadiumIcon,
  Actinium,
  Thorium,
  Protactinium,
  Neptunium,
  Americium,
  Curium,
  Berkelium,
  Californium,
  Einsteinium,
  Fermium,
  Mendelevium,
  Nobelium,
  Lawrencium,
  Rutherfordium,
  Dubnium,
  Seaborgium,
  Bohrium,
  Hassium,
  Meitnerium,
  Darmstadtium,
  Roentgenium,
  Copernicium,
  Nihonium,
  Flerovium,
  Moscovium,
  Livermorium,
  Tennessine,
  Oganesson
} from 'lucide-react';

const App = () => {
  const [activeSection, setActiveSection] = useState('inicio');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  const deliveryCards = [
    {
      icon: <Building className="w-8 h-8" />,
      title: "Página 1 – Vetor Incorporadora",
      description: "Apresentação institucional da marca, prédios entregues, visão de qualidade e histórico.",
      subtitle: "Fechamento com pitch para o Città Centrale",
      features: ["Histórico da empresa", "Portfólio de obras", "Diferenciais competitivos", "Credibilidade no mercado"]
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Página 2 – Città Centrale",
      description: "Detalhamento completo do empreendimento: plantas, diferenciais, localização e imagens",
      subtitle: "Identidade visual do prédio + Atendimento direto via WhatsApp com IA integrada",
      features: ["Plantas interativas", "Galeria de imagens", "Contatar corretor", "Informações com detalhes"]
    }
  ];

  const aiFeatures = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Atende 24h por WhatsApp e chat no site",
      description: "Disponibilidade total para capturar leads"
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Apresenta o imóvel, tira dúvidas e coleta dados",
      description: "Conversa inteligente e humanizada"
    },
    {
      icon: <UserCheck className="w-6 h-6" />,
      title: "Encaminha automaticamente os leads prontos",
      description: "Qualificação automática para o corretor"
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Reduz custos com equipe especializada",
      description: "Eficiência operacional máxima"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Dashboard completo com acompanhamento de atendimentos",
      description: "Controle total via Chatwoot"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "IA treinada especificamente para imóveis",
      description: "Conhecimento especializado do setor"
    }
  ];

  const marketingFeatures = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Anúncios em Instagram e Facebook",
      description: "Campanhas criadas para atrair o público ideal: pessoas que procuram imóveis para morar ou investir no centro de Rio Verde.",
      subtitle: "Utilizamos segmentações por perfil, interesse e localização."
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Leads indo direto para o WhatsApp",
      description: "Ao clicar no anúncio, o interessado cai diretamente no atendimento automatizado via IA.",
      subtitle: "Sem formulários, sem espera, com resposta imediata."
    },
    {
      icon: <Image className="w-8 h-8" />,
      title: "Artes, textos e mídia feitos sob medida",
      description: "Toda a parte visual e textual dos anúncios será desenvolvida com base na identidade do empreendimento.",
      subtitle: "Mantendo consistência estética e atratividade."
    }
  ];

  const brandingElements = [
    {
      icon: <Image className="w-6 h-6" />,
      title: "Logotipo oficial",
      description: "Identidade única do empreendimento"
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Paleta de cores e tipografia",
      description: "Sistema visual consistente"
    },
    {
      icon: <Layout className="w-6 h-6" />,
      title: "Aplicações gráficas completas",
      description: "Anúncios, placas, redes, folders"
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Presença visual fortalecida",
      description: "Diferenciação no mercado"
    }
  ];

  const journeySteps = [
    {
      icon: <MousePointer className="w-6 h-6" />,
      title: "Anúncio direciona",
      description: "Facebook/Instagram para a página",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Visitante conhece",
      description: "O prédio e aciona contato",
      color: "from-vetor-blue to-blue-700"
    },
    {
      icon: <Bot className="w-6 h-6" />,
      title: "IA atende",
      description: "Imediatamente e conduz conversa",
      color: "from-nocta-purple to-purple-600"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Lead qualificado",
      description: "Transferido para corretor",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Equipe Vetor",
      description: "Atende com histórico completo",
      color: "from-vetor-blue to-blue-600"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Fechamento",
      description: "Com velocidade e profissionalismo",
      color: "from-green-500 to-green-600"
    }
  ];

  const techFeatures = [
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "WhatsApp Business",
      description: "Integração nativa"
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "Chat Web",
      description: "Atendimento no site"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "CRM Integrado",
      description: "Gestão de leads"
    },
    {
      icon: <BarChart className="w-8 h-8" />,
      title: "Analytics",
      description: "Métricas em tempo real"
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-x-hidden w-full scroll-smooth">
{/* Header */}
<header className={`fixed top-6 left-4 right-4 z-50 transition-all duration-300 ${
  isScrolled ? 'bg-white/80 backdrop-blur-xl border border-gray-200/50 shadow-lg' : 'bg-white/80 backdrop-blur-xl border border-gray-200/50'
} rounded-2xl max-w-6xl mx-auto`}>
  <div className="px-8 py-4">
    <div className="flex items-center justify-center">
      {/* Logos Partnership */}
      <div className="flex items-center space-x-6">
        <div className="bg-white rounded-xl p-3 border border-gray-100">
          <img 
            src="https://i.imgur.com/Nqc58m5.png" 
            alt="Vetor Incorporadora" 
            className="h-8 w-auto max-w-[100px]"
          />
        </div>
        <div className="text-gray-400 text-2xl font-light">×</div>
        <div className="bg-white rounded-xl p-3 border border-gray-100 flex items-center justify-center">
          <img 
            src="https://i.imgur.com/bRuxY3s.png" 
            alt="NOCTA.I" 
            className="w-auto max-h-8 max-w-[100px]"
          />
        </div>
      </div>
    </div>
  </div>
</header>



      {/* Hero Section */}
      <section id="inicio" className="relative min-h-screen flex items-center justify-center pt-32 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-5"></div>
        
        {/* Geometric Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-vetor-blue/5 rounded-full blur-xl animate-float"></div>
          <div className="absolute top-1/3 right-1/3 w-24 h-24 bg-nocta-purple/10 rounded-full blur-lg animate-float" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-1/4 left-1/3 w-40 h-40 bg-vetor-blue/5 rounded-full blur-2xl animate-float" style={{animationDelay: '4s'}}></div>
          <div className="absolute top-1/2 right-1/4 w-20 h-20 bg-nocta-purple/8 rounded-full blur-lg animate-float" style={{animationDelay: '1s'}}></div>
          
          {/* Diagonal Lines */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-vetor-blue/20 to-transparent transform rotate-12"></div>
            <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-nocta-purple/20 to-transparent transform -rotate-12"></div>
          </div>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200/50 shadow-sm mb-8 animate-float">
            <Building className="w-4 h-4 text-vetor-blue mr-2" />
            <span className="text-sm font-medium text-gray-700">Apresentação Institucional + Solução Comercial Digital</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
            <span className="text-gray-900">🚀 Lançamento do </span>
            <span className="text-vetor-blue">Città Centrale</span>
            <br />
            <span className="text-gray-900">com Estrutura de Vendas </span>
            <span className="text-nocta-purple">Automatizada e Inteligente</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            Tudo que a Vetor precisa para apresentar, capturar e vender com tecnologia de ponta — sem perder o toque humano.
          </p>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50">
              <div className="text-2xl font-bold text-vetor-blue mb-2">24/7</div>
              <div className="text-sm text-gray-600">Atendimento ativo</div>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50">
              <div className="text-2xl font-bold text-nocta-purple mb-2">100%</div>
              <div className="text-sm text-gray-600">Presente no marketing</div>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50">
              <div className="text-2xl font-bold text-vetor-blue mb-2">20 dias</div>
              <div className="text-sm text-gray-600">Prazo de entrega</div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="flex justify-center">
            <button 
              onClick={() => scrollToSection('visao-geral')}
              className="group inline-flex flex-col items-center text-gray-500 hover:text-vetor-blue transition-colors duration-200"
            >
              <span className="text-sm font-medium mb-2">Veja o projeto</span>
              <ChevronDown className="w-6 h-6 group-hover:animate-bounce" />
            </button>
          </div>
        </div>
      </section>

      {/* Visão Geral Section */}
      <section id="visao-geral" className="py-20 bg-gradient-to-br from-vetor-blue via-vetor-blue to-blue-700 text-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-nocta-purple/20 rounded-full blur-2xl"></div>
          
          {/* Vetor Logo Watermark */}
          <div className="absolute top-1/2 right-10 transform -translate-y-1/2 opacity-5">
            <img 
              src="https://i.imgur.com/Nqc58m5.png" 
              alt="Vetor" 
              className="h-32 filter brightness-0 invert"
            />
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white font-medium text-sm mb-6">
              <MapPin className="w-4 h-4 mr-2" />
              📌 Visão Geral da Entrega
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Sobre o Projeto
            </h2>
            <p className="text-lg text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Este projeto marca a construção de uma estrutura digital completa para o lançamento do Città Centrale — 
              o empreendimento mais estratégico da Vetor Incorporadora.
            </p>
            <p className="text-lg text-blue-100 max-w-4xl mx-auto leading-relaxed mt-4">
              Vamos unir websites completos com estrutura, identidade visual, marketing com performance e automação total 
              para potencializar vendas, gerar valor percebido e escalar o atendimento com eficiência.
            </p>
          </div>

          {/* Key Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-colors">
                <Globe className="w-8 h-8" />
              </div>
              <h4 className="font-semibold mb-2">Websites Completos</h4>
              <p className="text-sm text-blue-200">Estrutura digital profissional</p>
            </div>
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-colors">
                <Palette className="w-8 h-8" />
              </div>
              <h4 className="font-semibold mb-2">Identidade Visual</h4>
              <p className="text-sm text-blue-200">Marca exclusiva do empreendimento</p>
            </div>
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-colors">
                <TrendingUp className="w-8 h-8" />
              </div>
              <h4 className="font-semibold mb-2">Marketing com Performance</h4>
              <p className="text-sm text-blue-200">Campanhas otimizadas</p>
            </div>
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-colors">
                <Zap className="w-8 h-8" />
              </div>
              <h4 className="font-semibold mb-2">Automação Total</h4>
              <p className="text-sm text-blue-200">Eficiência operacional</p>
            </div>
          </div>
        </div>
      </section>

      {/* Estrutura Section */}
      <section className="py-20 bg-gray-50 relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-r from-vetor-blue/10 via-transparent to-nocta-purple/10"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-nocta-purple/10 text-nocta-purple font-medium text-sm mb-6">
              <Wrench className="w-4 h-4 mr-2" />
              🔧 O que será desenvolvido
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Divisão da Estrutura
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {deliveryCards.map((card, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-500 hover:border-vetor-blue/20 hover:-translate-y-2 relative overflow-hidden">
                  {/* Background Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-vetor-blue/5 to-nocta-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative">
                    <div className="text-vetor-blue mb-6 group-hover:scale-110 transition-transform duration-300">
                      {card.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{card.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{card.description}</p>
                    <p className="text-sm text-nocta-purple font-medium mb-6">{card.subtitle}</p>
                    
                    {/* Features List */}
                    <div className="space-y-3">
                      {card.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Vetor Logo Watermark */}
                  <div className="absolute bottom-4 right-4 opacity-5 group-hover:opacity-10 transition-opacity">
                    <img 
                      src="https://i.imgur.com/Nqc58m5.png" 
                      alt="Vetor" 
                      className="h-8"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Atendimento Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-nocta-purple/20 to-transparent"></div>
          <div className="absolute bottom-1/4 right-0 w-full h-px bg-gradient-to-l from-transparent via-vetor-blue/20 to-transparent"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-nocta-purple/10 text-nocta-purple font-medium text-sm mb-6">
              <Bot className="w-4 h-4 mr-2" />
              🤖 Atendimento com IA treinada e humanizada
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Atendimento Inteligente
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Nossa IA foi especialmente treinada para o mercado imobiliário, oferecendo atendimento humanizado e eficiente
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {aiFeatures.map((feature, index) => (
              <div key={index} className="group">
                <div className="bg-gradient-to-br from-nocta-purple/5 to-nocta-purple/10 rounded-xl p-6 border border-nocta-purple/10 hover:border-nocta-purple/20 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 relative overflow-hidden">
                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-nocta-purple/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative">
                    <div className="text-nocta-purple mb-4 group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <h4 className="text-gray-800 font-semibold mb-2">{feature.title}</h4>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Tech Integration */}
          <div className="bg-gradient-to-r from-vetor-blue/10 to-nocta-purple/10 rounded-2xl p-8 border border-gray-200 relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-5"></div>
            
            <div className="relative">
              <div className="text-center mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Integração Tecnológica Completa</h3>
                <p className="text-gray-600">Plataformas conectadas para máxima eficiência</p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {techFeatures.map((tech, index) => (
                  <div key={index} className="text-center group">
                    <div className="w-16 h-16 bg-white rounded-xl shadow-sm flex items-center justify-center mx-auto mb-3 group-hover:shadow-md transition-shadow">
                      <div className="text-vetor-blue group-hover:scale-110 transition-transform duration-300">
                        {tech.icon}
                      </div>
                    </div>
                    <h4 className="font-semibold text-gray-900 text-sm mb-1">{tech.title}</h4>
                    <p className="text-xs text-gray-600">{tech.description}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Vetor Logo */}
            <div className="absolute bottom-4 right-4 opacity-5">
              <img 
                src="https://i.imgur.com/Nqc58m5.png" 
                alt="Vetor" 
                className="h-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Marketing e Tráfego Pago Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-vetor-blue to-blue-800 text-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-nocta-purple/20 rounded-full blur-2xl"></div>
          
          {/* Geometric Lines */}
          <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent transform rotate-12"></div>
          <div className="absolute bottom-1/3 right-0 w-full h-px bg-gradient-to-l from-transparent via-white/20 to-transparent transform -rotate-12"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white font-medium text-sm mb-6">
              <Target className="w-4 h-4 mr-2" />
              📣 Divulgação inteligente e tráfego estratégico
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Marketing e Tráfego Pago
            </h2>
            <p className="text-lg text-blue-100 max-w-4xl mx-auto leading-relaxed">
              A estrutura digital do Città Centrale será impulsionada com campanhas ativas nas redes sociais — 
              segmentadas, otimizadas e com foco em performance comercial desde o primeiro dia.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {marketingFeatures.map((feature, index) => (
              <div key={index} className="group">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2 relative overflow-hidden">
                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative text-center">
                    <div className="text-white mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                    <p className="text-blue-100 mb-4 leading-relaxed">{feature.description}</p>
                    <p className="text-sm text-blue-200 font-medium">{feature.subtitle}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Marketing Strategy Info */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 relative overflow-hidden">
            <div className="text-center">
              <h3 className="text-xl font-bold text-white mb-4">Estratégia Completa de Tráfego</h3>
              <p className="text-blue-100 leading-relaxed">
                Toda a estrutura de tráfego pago será pensada para abastecer a operação com leads qualificados, 
                que passam pela IA e são encaminhados para o time comercial da Vetor com contexto, interesse e prontidão para negociação.
              </p>
            </div>
            
            {/* Vetor Logo */}
            <div className="absolute bottom-4 right-4 opacity-10">
              <img 
                src="https://i.imgur.com/Nqc58m5.png" 
                alt="Vetor" 
                className="h-8 filter brightness-0 invert"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Identidade Visual Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-vetor-blue/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-nocta-purple/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-vetor-blue/10 text-vetor-blue font-medium text-sm mb-6">
              <PaintBucket className="w-4 h-4 mr-2" />
              🎨 Marca visual do Città Centrale
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Identidade Visual Exclusiva
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Será criada toda a identidade visual exclusiva do empreendimento, com:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {brandingElements.map((element, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 text-center hover:-translate-y-2 relative overflow-hidden">
                  {/* Hover Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-vetor-blue/5 to-nocta-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative">
                    <div className="text-vetor-blue mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                      {element.icon}
                    </div>
                    <h4 className="text-gray-800 font-semibold mb-2">{element.title}</h4>
                    <p className="text-sm text-gray-600">{element.description}</p>
                  </div>
                  
                  {/* Vetor Logo Watermark */}
                  <div className="absolute bottom-2 right-2 opacity-5 group-hover:opacity-10 transition-opacity">
                    <img 
                      src="https://i.imgur.com/Nqc58m5.png" 
                      alt="Vetor" 
                      className="h-6"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Jornada Digital Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-5"></div>
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-vetor-blue/20 to-transparent"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-nocta-purple/10 text-nocta-purple font-medium text-sm mb-6">
              <Navigation className="w-4 h-4 mr-2" />
              🧭 Jornada do lead: do clique ao fechamento
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Jornada Digital do Lead
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Acompanhe o caminho completo do primeiro clique até o fechamento da venda
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line - Desktop */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-vetor-blue via-nocta-purple to-vetor-blue transform -translate-y-1/2 rounded-full"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
              {journeySteps.map((step, index) => (
                <div key={index} className="relative group">
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 text-center relative z-10 hover:-translate-y-2">
                    {/* Step Number */}
                    <div className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-r from-vetor-blue to-nocta-purple text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                    
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${step.color} text-white flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      {step.icon}
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">{step.title}</h4>
                    <p className="text-sm text-gray-600">{step.description}</p>
                  </div>
                  
                  {/* Arrow - Desktop */}
                  {index < journeySteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                      <ArrowRight className="w-6 h-6 text-gray-400 group-hover:text-vetor-blue transition-colors" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Success Metrics */}
          <div className="mt-16 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 border border-green-200/50 relative">
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Resultados Esperados</h3>
              <p className="text-gray-600">Métricas de performance da jornada digital</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 mb-1">24/7</div>
                <div className="text-sm text-gray-600">Disponibilidade</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600 mb-1">-70%</div>
                <div className="text-sm text-gray-600">Tempo de resposta</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-vetor-blue mb-1">+150%</div>
                <div className="text-sm text-gray-600">Conversão</div>
              </div>
            </div>
            
            {/* Vetor Logo */}
            <div className="absolute bottom-4 right-4 opacity-5">
              <img 
                src="https://i.imgur.com/Nqc58m5.png" 
                alt="Vetor" 
                className="h-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Investimento Section */}
      <section className="py-20 bg-gradient-to-br from-vetor-blue/5 via-white to-nocta-purple/5 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-0 w-96 h-96 bg-vetor-blue/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-nocta-purple/5 rounded-full blur-2xl"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-vetor-blue/10 text-vetor-blue font-medium text-sm mb-6">
              <DollarSign className="w-4 h-4 mr-2" />
              💰 Investimento e Prazos
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Investimento e Prazos
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Valores transparentes para uma solução completa e profissional
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="group">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-vetor-blue/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden">
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-vetor-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative text-center">
                  <div className="w-16 h-16 bg-vetor-blue/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-vetor-blue/20 transition-colors">
                    <Zap className="w-8 h-8 text-vetor-blue" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Entrega inicial</h3>
                  <p className="text-gray-600 mb-4">Setup completo da estrutura</p>
                  <div className="text-3xl font-bold text-vetor-blue mb-4">R$ 9.000</div>
                  
                  {/* Included Features */}
                  <div className="text-left space-y-2">
                    <div className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Duas páginas completas
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      IA treinada e configurada
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Identidade visual
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Estratégia de marketing e anúncios online
                    </div>
                  </div>
                </div>
                
                {/* Vetor Logo with white background */}
                <div className="absolute bottom-4 right-4 opacity-20 group-hover:opacity-30 transition-opacity">
                  <div className="bg-white rounded-lg p-2">
                    <img 
                      src="https://i.imgur.com/Nqc58m5.png" 
                      alt="Vetor" 
                      className="h-6"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-nocta-purple/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden">
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-nocta-purple/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative text-center">
                  <div className="w-16 h-16 bg-nocta-purple/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-nocta-purple/20 transition-colors">
                    <Calendar className="w-8 h-8 text-nocta-purple" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Mensalidade</h3>
                  <p className="text-gray-600 mb-4">IA + painel + suporte + tráfego</p>
                  <div className="text-3xl font-bold text-nocta-purple mb-4">R$ 2.000</div>
                  
                  {/* Included Features */}
                  <div className="text-left space-y-2">
                    <div className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Operação da IA 24/7
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Painel de controle
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Suporte técnico
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Gestão de tráfego pago
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="text-center">
            <div className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-vetor-blue to-nocta-purple text-white font-bold text-lg shadow-lg hover:shadow-xl transition-shadow">
              <Clock className="w-5 h-5 mr-2" />
              🗓️ Prazo total de entrega: até 20 dias corridos
            </div>
          </div>

          {/* ROI Information */}
          <div className="mt-12 bg-white rounded-2xl p-8 border border-gray-200 shadow-sm relative">
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Retorno do Investimento</h3>
              <p className="text-gray-600">Com apenas 1 venda adicional por mês, o investimento se paga</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-green-50 rounded-xl">
                <div className="text-lg font-bold text-green-600 mb-1">Economia</div>
                <div className="text-sm text-gray-600">Redução de custos operacionais</div>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-xl">
                <div className="text-lg font-bold text-blue-600 mb-1">Eficiência</div>
                <div className="text-sm text-gray-600">Atendimento 24h automatizado</div>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-xl">
                <div className="text-lg font-bold text-purple-600 mb-1">Crescimento</div>
                <div className="text-sm text-gray-600">Aumento na conversão de leads</div>
              </div>
            </div>
            
            {/* Vetor Logo */}
            <div className="absolute bottom-4 right-4 opacity-5">
              <img 
                src="https://i.imgur.com/Nqc58m5.png" 
                alt="Vetor" 
                className="h-8"
              />
            </div>
          </div>
        </div>
      </section>

{/* Encerramento Section */}
<section className="py-20 bg-gray-900 relative overflow-hidden">
  {/* Background Image */}
  <div 
    className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
    style={{
      backgroundImage: 'url(/image copy copy.png)',
      backgroundBlendMode: 'overlay'
    }}
  ></div>
  
  {/* Blue Overlay */}
  <div className="absolute inset-0 bg-gradient-to-br from-vetor-blue/80 via-vetor-blue/60 to-nocta-purple/40"></div>
  
  {/* Background Elements */}
  <div className="absolute inset-0">
    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
    <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-nocta-purple/20 rounded-full blur-2xl"></div>
  </div>
  
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
        📞 Uma estrutura digital alinhada ao padrão Vetor
      </h2>
      <p className="text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
        Uma operação pensada para reforçar a marca, encantar o cliente no primeiro contato e garantir 
        que cada lead seja atendido com inteligência, consistência e profissionalismo.
      </p>
    </div>

    {/* Key Values */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
      <div className="text-center group">
        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-colors">
          <Award className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-lg font-semibold text-white mb-2">Excelência</h3>
        <p className="text-gray-300 text-sm">Padrão premium em cada interação</p>
      </div>
      
      <div className="text-center group">
        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-colors">
          <Zap className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-lg font-semibold text-white mb-2">Inovação</h3>
        <p className="text-gray-300 text-sm">Tecnologia de ponta aplicada</p>
      </div>
      
      <div className="text-center group">
        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-colors">
          <Heart className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-lg font-semibold text-white mb-2">Humanização</h3>
        <p className="text-gray-300 text-sm">Toque humano preservado</p>
      </div>
    </div>

{/* Partnership Logos */} 
<div className="flex items-center justify-center space-x-8">
  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-colors">
    <div className="bg-white rounded-lg p-2">
      <img 
        src="https://i.imgur.com/Nqc58m5.png" 
        alt="Vetor Incorporadora" 
        className="h-8 w-auto max-w-[120px] object-contain"
          />
        </div>
      </div>
      <div className="text-white/40 text-2xl font-light">×</div>
      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-colors">
        <img 
          src="https://i.imgur.com/j6EvROz.png" 
          alt="NOCTA.I" 
          className="h-8 w-auto opacity-90" 
        />
      </div>
    </div>
  </div>
</section>

{/* Footer */}
<footer className="bg-black py-8">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center">
      <p className="text-gray-400 text-sm">
        © 2025 Parceria Vetor Incorporadora × NOCTA.I
      </p>
      <p className="text-gray-500 text-xs mt-1">
        Tecnologia e tradição imobiliária em perfeita sintonia
      </p>
    </div>
  </div>
</footer>


    </div>
  );
};

export default App;