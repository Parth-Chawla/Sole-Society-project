-- Seed data for Sole Society

INSERT INTO brands (id, name) VALUES
  (1, 'Jordan'),
  (2, 'Yeezy'),
  (3, 'Onitsuka Tiger')
ON CONFLICT DO NOTHING;

INSERT INTO sneakers (id, brand_id, name, price, image_url, description, stock) VALUES
  -- Jordan (8 total)
  (1, 1, 'Air Jordan 1 Mid Racer Blue White Black', 11000.00, 'assets/img/jordan1.png',
    'A bold mix of blue, white and black creates a striking mid-cut silhouette. Premium leather overlays ensure lasting comfort. A timeless court classic reimagined for streetwear.'),
  (2, 1, 'Air Jordan 4 Retro Military Black', 18500.00, 'assets/img/jordan2.png',
    'Crisp white leather with black and grey accents delivers a clean, sharp look. Iconic mesh side panels and Air cushioning keep it true to form. A must-have for Jordan collectors.'),
  (3, 1, 'Air Jordan 1 Low Triple White', 9999.00, 'assets/img/jordan3.png',
    'The ultimate minimalist sneaker in all-white leather. Sleek lines and a low profile make it versatile for any outfit. Lightweight comfort meets legendary heritage.'),
  (4, 1, 'Air Jordan 11 Retro Cool Grey', 21500.00, 'assets/img/jordan4.png',
    'A beloved colorway featuring cool grey patent leather and white midsoles. Known for its premium finish and unmistakable shine. A statement piece both on and off the court.'),
  (5, 1, 'Air Jordan 3 Retro Fire Red', 19500.00, 'assets/img/jordan5.png',
    'Iconic elephant print meets vibrant Fire Red accents. A classic from MJ's era that never fades. Built for comfort, style, and nostalgia in every step.'),
  (6, 1, 'Air Jordan 5 Retro Green Bean', 17500.00, 'assets/img/jordan6.png',
    'Reflective silver uppers pair with bold green details for a futuristic vibe. Air cushioning and a translucent outsole complete the retro-modern look.'),
  (7, 1, 'Air Jordan 6 Carmine', 20000.00, 'assets/img/jordan7.png',
    'Red suede and white leather panels create striking contrast. Originally worn by MJ in 1991, this design is steeped in championship history. A true collector's item.'),
  (8, 1, 'Air Jordan 13 Retro Playoffs', 18999.00, 'assets/img/jordan8.png',
    'Premium black leather with yellow accents embodies playoff intensity. Inspired by MJ's dominant performances. Distinctive sole pods offer unmatched grip and comfort.'),

  -- Yeezy (8 total)
  (9, 2, 'Yeezy Slide Beluga 2', 14399.00, 'assets/img/yeezy1.png',
    'Ultra-soft EVA foam construction for cloud-like comfort. Sleek Beluga colorway blends style with ease. Ideal for casual wear and everyday luxury.'),
  (10, 2, 'Yeezy Boost 350 V2 Zebra', 23000.00, 'assets/img/yeezy2.png',
    'The famous Zebra pattern offers a bold streetwear edge. Boost midsole delivers responsive cushioning with every step. A modern icon in the sneaker world.'),
  (11, 2, 'Yeezy Foam Runner Sand', 16500.00, 'assets/img/yeezy3.png',
    'Futuristic design meets sustainability with its unique EVA and algae blend. Lightweight, breathable, and ultra-cushioned. A fashion-forward essential.'),
  (12, 2, 'Yeezy Boost 700 Wave Runner', 28500.00, 'assets/img/yeezy4.png',
    'Chunky silhouette with vibrant accents for a standout look. Premium suede and mesh uppers ensure breathability. Boost technology keeps comfort all day.'),
  (13, 2, 'Yeezy 500 Utility Black', 21000.00, 'assets/img/yeezy5.png',
    'Monochrome black mesh and suede offer a sleek yet rugged feel. Adiprene cushioning provides stable support. A dark essential for minimalist fits.'),
  (14, 2, 'Yeezy Boost 380 Alien Blue', 24500.00, 'assets/img/yeezy6.png',
    'Primeknit upper features unique patterns with a soft, sock-like fit. Alien Blue midsole gives futuristic flair. Ideal for both lifestyle and casual wear.'),
  (15, 2, 'Yeezy QNTM Lifestyle', 22000.00, 'assets/img/yeezy7.png',
    'Basketball performance meets lifestyle design. Reflective details and plush cushioning elevate every step. A hybrid sneaker that turns heads anywhere.'),
  (16, 2, 'Yeezy 450 Cloud White', 19500.00, 'assets/img/yeezy8.png',
    'Avant-garde sole design wraps around the knit upper for a striking effect. Lightweight and breathable construction. Perfect for modern, experimental looks.'),

  -- Onitsuka Tiger (8 total)
  (17, 3, 'Onitsuka Tiger Chugger Mid', 25000.00, 'assets/img/onitsuka1.png',
    'A rugged mid-top built for durability and everyday wear. Premium materials meet Japanese craftsmanship. A statement sneaker with a vintage edge.'),
  (18, 3, 'Onitsuka Tiger Mexico 66 White Gold', 11500.00, 'assets/img/onitsuka2.png',
    'White leather base with metallic gold stripes brings elegant flair. Lightweight structure ensures day-long comfort. A timeless retro runner.'),
  (19, 3, 'Onitsuka Tiger Serrano Black', 8900.00, 'assets/img/onitsuka3.png',
    'Sleek black upper with classic Onitsuka stripes. Inspired by 70s track shoes for a sporty aesthetic. Flexible rubber outsole ensures agile movement.'),
  (20, 3, 'Onitsuka Tiger GSM Cream Blue', 10500.00, 'assets/img/onitsuka4.png',
    'Cream leather uppers paired with pastel blue accents for a soft, premium vibe. Low-profile design ideal for casual wear. Vintage tennis-inspired styling.'),
  (21, 3, 'Onitsuka Tiger Corsair OG Blue', 9500.00, 'assets/img/onitsuka5.png',
    'Retro blue upper with bold stripes delivers old-school charm. Originally built for running, now perfect for lifestyle fits. Lightweight comfort for daily use.'),
  (22, 3, 'Onitsuka Tiger Lawnship 3.0', 8800.00, 'assets/img/onitsuka6.png',
    'Minimalist design with clean lines and premium leather. Slim silhouette pairs well with any outfit. A refined take on classic sneakers.'),
  (23, 3, 'Onitsuka Tiger Ultimate 81 Black', 9700.00, 'assets/img/onitsuka7.png',
    'A true retro runner featuring black suede and mesh panels. Heel stabilizers add support, while classic stripes complete the look. Built for everyday wear.'),
  (24, 3, 'Onitsuka Tiger Colorado Eighty-Five', 12500.00, 'assets/img/onitsuka8.png',
    'Trail-inspired silhouette with rugged soles and bold color blocking. Combines heritage running style with modern comfort. Ready for both city and adventure.')
ON CONFLICT DO NOTHING;

