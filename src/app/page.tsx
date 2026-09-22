import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import PageContent from '@/components/PageContent/PageContent';
import styles from './page.module.css';

const mockProducts = [
  {
    id: '1',
    name: 'Charcoal Woven Backpack',
    description: 'Premium woven backpack with adjustable straps',
    price: '$99.00',
    image: '/images/Rectangle 29437.png',
  },
  {
    id: '2',
    name: 'Yellow Crochet Dinosaur Toy',
    description: 'Handmade crochet dinosaur toy',
    price: '$149.00',
    image: '/images/Image.png',
    isOutOfStock: true,
  },
  {
    id: '3',
    name: 'Leather ID Card Holder',
    description: 'Genuine leather card holder',
    price: '$89.00',
    image: '/images/Rectangle 29418.png',
  },
  {
    id: '4',
    name: 'Embroidered Linen Cap',
    description: 'Stylish linen cap with embroidery',
    price: '$129.00',
    image: '/images/Rectangle 29431.png',
  },
  {
    id: '5',
    name: 'Charcoal Backpack (Back View)',
    description: 'Durable charcoal backpack',
    price: '$159.00',
    image: '/images/Rectangle 19438.png',
  },
  {
    id: '6',
    name: 'Crochet Dinosaur Plush',
    description: 'Soft crochet dinosaur plush toy',
    price: '$119.00',
    image: '/images/Rectangle 29433.png',
  },
  {
    id: '7',
    name: 'Tan Leather Shoulder Bag',
    description: 'Elegant tan leather shoulder bag',
    price: '$199.00',
    image: '/images/Rectangle 29434.png',
  },
  {
    id: '8',
    name: 'Grey Travel Roll-Pouch',
    description: 'Compact travel pouch',
    price: '$139.00',
    image: '/images/Rectangle 29436.png',
  },
  {
    id: '9',
    name: 'Woven Backpack (Folded)',
    description: 'Foldable woven backpack',
    price: '$109.00',
    image: '/images/Rectangle 29432.png',
  },
  {
    id: '10',
    name: 'Striped Coin Pouch',
    description: 'Colorful striped coin pouch',
    price: '$79.00',
    image: '/images/Rectangle 29439.png',
  },
  {
    id: '11',
    name: 'Tan Braided Leather Bag',
    description: 'Braided leather design bag',
    price: '$89.00',
    image: '/images/Rectangle 29438.png',
  },
  {
    id: '12',
    name: 'Charcoal Woven Backpack',
    description: 'Classic woven backpack design',
    price: '$129.00',
    image: '/images/Rectangle 29437.png',
  },
  {
    id: '13',
    name: 'Leather ID Card Holder',
    description: 'Premium leather card holder',
    price: '$149.00',
    image: '/images/Rectangle 29418.png',
  },
  {
    id: '14',
    name: 'Embroidered Linen Cap',
    description: 'Comfortable linen cap',
    price: '$99.00',
    image: '/images/Rectangle 29431.png',
  },
  {
    id: '15',
    name: 'Crochet Dinosaur Plush',
    description: 'Adorable crochet dinosaur',
    price: '$179.00',
    image: '/images/Rectangle 29433.png',
  },
];

// Server-side data fetching with SSR
async function getProducts() {
  try {
    // Try to fetch from FakeStoreAPI
    const response = await fetch('https://fakestoreapi.com/products', {
      next: { revalidate: 3600 } // Revalidate every hour
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }
    
    const apiProducts = await response.json();
    
    // Transform API data to match our product structure
    return apiProducts.map((product: any) => ({
      id: product.id.toString(),
      name: product.title,
      description: product.description.substring(0, 50) + '...',
      price: `$${product.price.toFixed(2)}`,
      image: product.image,
      isOutOfStock: false,
    }));
  } catch (error) {
    console.log('Using mock data due to API error');
    // Fallback to mock data if API fails
    return mockProducts;
  }
}

export default async function Home() {
  // Server-side data fetching
  const products = await getProducts();

  // Schema.org JSON-LD
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Discover Our Products | mettà muse',
    description: 'Explore our curated collection of premium products including bags, accessories, and lifestyle items.',
    url: 'https://mettamuse.com',
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: products.map((product: any, index: number) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'Product',
          name: product.name,
          description: product.description,
          image: product.image,
          offers: {
            '@type': 'Offer',
            price: product.price.replace('$', ''),
            priceCurrency: 'USD',
            availability: product.isOutOfStock ? 'https://schema.org/OutOfStock' : 'https://schema.org/InStock',
          },
        },
      })),
    },
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://mettamuse.com',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Products',
          item: 'https://mettamuse.com/products',
        },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Header />
      <main className={styles.main}>
        <section className={styles.heroSection}>
          <h1 className={styles.heroTitle}>DISCOVER OUR PRODUCTS</h1>
          <p className={styles.heroSubtitle}>
            Lorem ipsum dolor sit amet consectetur. Amet est posseuere rhoncus
            scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.
          </p>
        </section>

        <PageContent products={products} />
      </main>
      <Footer />
    </>
  );
}
