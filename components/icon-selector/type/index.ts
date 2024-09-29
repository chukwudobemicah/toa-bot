import {
  Logo,
  Search,
  Cancel,
  ArrowIncrease,
  Pin,
  Plus,
  Mute,
  Minus,
  Menu,
  Logout,
  Hashtag,
  Clock,
  Filter,
  Picture,
  MainLogo,
  Copy,
  Profile,
  SolanaClassicLogo,
  FireIcon,
  Referral,
  LisitingIcon,
  ImageClip,
  ChevronUpIcon,
  LayoutGraduent,
  BroadcastIcon,
  CommentIcon,
  HeartIcon,
  SmileyFace,
  Coin,
  UserAvatar,
  StarIcon,
  Increase,
  Privacy,
  Accessible,
  Multichain,
  Hidden,
  Fingerprint,
  Seventeen,
  Eagle,
  WhiteStar,
  SolanaIcon,
  Graph,
  More,
  CategoryIcon,
  SeeMore,
  Telegram,
  X,
  Discord,
  Solscan,
  Cmc,
  Solana,
  Wif,
  Ar,
  Bonk,
  Ldo,
  Pyth,
  BuyOnUp,
  BuyOnMe,
  Arrowup,
  FeedIcon,
  TopicsIcon,
  MyPageIcon,
  FriendsIcon,
  TopRatedIcon,
  WatchListIcon,
  Expand,
  Share,
  FileUploadIcon,
  GIFIcon,
  Verified,
  EmojiIcon,
  PollIcon,
  VerifiedBadge,
  BearIcon,
  BuilderIcon,
  BullIcon,
  Star,
  CommentsIcon,
  Person,
  FOMOIcon,
  FUDIcon,
  HeartIconTwo,
  JestIcon,
  RepostIcon,
  SmileyIcon,
  ViewsIcon,
  ThumbsUpIcon,
  OptionsIcon,
  Exchange,
  Chevron,
  Globe,
  HeartOutline,
  SlideIndicator,
  SendIcon,
  Copy2,
  SidebarArrow,
  X2,
  EditIcon,
  LiveChatIcon,
  NoPostIcon,
  Reddit,
  Github,
  Pause,
  Info,
  GoogleIcon,
  AppleIcon,
  BinanceIcon,
  WalletIcon,
  EyesCloseIcon,
  Link,
  Ticket,
  List,
  Dogecoin,
  Eth,
  Usdt,
  Usdc,
  Home,
  Chat,
  About,
  TierList,
  History,
  Sales,
  Messages,
  Notifications,
  Settings,
  Bitcoin,
  Bnb,
  Toncoin,
  Xrp,
  Compare,
  Curve,

  // new icons
  TwitterIcon,
  FacebookIcon,
  InstagramIcon,
  YoutubeIcon,
  TelegramIcon,
  DiscordIcon,
  LinkedinIcon,
  ArrowRightIcon,
  FooterLogo,
  SearchIcon,
  HomeTitle,
  PlayIcon,
  CopyIcon,
  UploadIcon,
  EthereummIcon,
  TagIcon,
  BadgeIcon,
  Plane,
  Add,
  Check,
  //
  LinkedIn,
  Twitter,
  Instagram,
  Youtube,
  Eye,
  Bell,
  UserIcon,
  TabOne,
  TabTwo,
  TabThree,
  TabFour,
  TabFive,
} from "./svgs/svgs";

export const ICON_TYPE: {
  [key: string]: {
    [key: string]: React.ComponentType<React.SVGProps<SVGSVGElement>>; // Adjust the type according to your component types
  };
} = {
  ICONS: {
    logo: Logo,
    search: Search,
    cancel: Cancel,
    arrowIncrease: ArrowIncrease,
    pin: Pin,
    plus: Plus,
    mute: Mute,
    minus: Minus,
    menu: Menu,
    logout: Logout,
    hashtag: Hashtag,
    clock: Clock,
    copy: Copy,
    profile: Profile,
    filter: Filter,
    mainLogo: MainLogo,
    solanaClassLogo: SolanaClassicLogo,
    increase: Increase,
    fireIcon: FireIcon,
    listingIcon: LisitingIcon,
    chevronUp: ChevronUpIcon,
    broadcast: BroadcastIcon,
    comment: CommentIcon,
    heart: HeartIcon,
    userAvatar: UserAvatar,
    fingerprint: Fingerprint,
    seventeen: Seventeen,
    eagle: Eagle,
    starIcon: StarIcon,
    whiteStar: WhiteStar,
    solanaIcon: SolanaIcon,
    graph: Graph,
    categoryIcon: CategoryIcon,
    seeMore: SeeMore,
    telegram: Telegram,
    x: X,
    discord: Discord,
    solscan: Solscan,
    cmc: Cmc,
    solana: Solana,
    wif: Wif,
    ar: Ar,
    bonk: Bonk,
    ldo: Ldo,
    pyth: Pyth,
    buyOnUp: BuyOnUp,
    buyOnMe: BuyOnMe,
    arrowup: Arrowup,
    feedIcon: FeedIcon,
    topicsIcon: TopicsIcon,
    myPageIcon: MyPageIcon,
    friendsIcon: FriendsIcon,
    topRatedIcon: TopRatedIcon,
    watchlistIcon: WatchListIcon,
    fileUploadIcon: FileUploadIcon,
    gifIcon: GIFIcon,
    emojiIcon: EmojiIcon,
    pollsIcon: PollIcon,
    verifiedBadge: VerifiedBadge,
    bearIcon: BearIcon,
    builderIcon: BuilderIcon,
    bullIcon: BullIcon,
    commentsIcon: CommentsIcon,
    fomoIcon: FOMOIcon,
    fudIcon: FUDIcon,
    heartTwoIcon: HeartIconTwo,
    jestIcon: JestIcon,
    repostIcon: RepostIcon,
    smileyIcon: SmileyIcon,
    viewsIcon: ViewsIcon,
    thumbsUpIcon: ThumbsUpIcon,
    optionsIcon: OptionsIcon,
    exchange: Exchange,
    chevron: Chevron,
    heartOutline: HeartOutline,
    globe: Globe,
    slideIndicator: SlideIndicator,
    smileyFace: SmileyFace,
    send: SendIcon,
    edit: EditIcon,
    liveChat: LiveChatIcon,
    noPost: NoPostIcon,
    reddit: Reddit,
    github: Github,
    pause: Pause,
    info: Info,
    google: GoogleIcon,
    apple: AppleIcon,
    binance: BinanceIcon,
    wallet: WalletIcon,
    eyesClose: EyesCloseIcon,
    link: Link,
    ticket: Ticket,
    list: List,
    dogecoin: Dogecoin,
    eth: Eth,
    "lido staked ether": Ldo,
    ethereum: Eth,
    toncoin: Toncoin,
    xrp: Xrp,
    usdt: Usdt,
    tether: Usdt,
    usdc: Usdc,
    bitcoin: Bitcoin,
    bnb: Bnb,
    compare: Compare,
    curve: Curve,
    coin: Coin,
    "copy-2": Copy2,
    "x-2": X2,
    referral: Referral,
    person: Person,

    // Recent icons
    twitterIcon: TwitterIcon,
    facebookIcon: FacebookIcon,
    instagramIcon: InstagramIcon,
    youtubeIcon: YoutubeIcon,
    linkedinIcon: LinkedinIcon,
    telegramIcon: TelegramIcon,
    discordIcon: DiscordIcon,
    arrowRightIcon: ArrowRightIcon,
    footerLogo: FooterLogo,
    searchIcon: SearchIcon,
    homeTitle: HomeTitle,
    playIcon: PlayIcon,
    copyIcon: CopyIcon,
    uploadIcon: UploadIcon,
    ethereumIcon: EthereummIcon,
    tagIcon: TagIcon,
    badgeIcon: BadgeIcon,
    //
    linkedIn: LinkedIn,
    twitter: Twitter,
    instagram: Instagram,
    youtube: Youtube,
    eye: Eye,
    verified: Verified,
    star: Star,
    privacy: Privacy,
    accessible: Accessible,
    multichain: Multichain,
    hidden: Hidden,
    plane: Plane,
    add: Add,
    check: Check,
    more: More,
    layoutGraduent: LayoutGraduent,
    //
    imageClip: ImageClip,
    about: About,
    tierList: TierList,
    history: History,
    sales: Sales,
    messages: Messages,
    notifications: Notifications,
    settings: Settings,
    chat: Chat,
    home: Home,
    picture: Picture,
    sidebarArrow: SidebarArrow,
    thickChevron: SidebarArrow,
    bell: Bell,
    user: UserIcon,
    tabOne: TabOne,
    tabTwo: TabTwo,
    tabThree: TabThree,
    tabFour: TabFour,
    tabFive: TabFive,
    expand: Expand,
    share: Share,
  },
};
