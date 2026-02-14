import { pgTable, uuid, text, numeric, timestamp, pgEnum, integer } from 'drizzle-orm/pg-core';

// Enums
export const orderStatusEnum = pgEnum('order_status', [
  'PENDING', 'ACCEPTED', 'PREPARING', 'OUT_FOR_DELIVERY', 'DELIVERED', 'CANCELLED'
]);

export const paymentStatusEnum = pgEnum('payment_status', [
  'WAITING', 'APPROVED', 'DECLINED'
]);

export const userRoleEnum = pgEnum('user_role', ['ADMIN', 'CUSTOMER']);

// Tabelas
export const users = pgTable('users', {
  id: uuid('id').primaryKey().defaultRandom(),
  name: text('name').notNull(),
  email: text('email').unique().notNull(),
  password: text('password').notNull(),
  phone: text('phone'),
  role: userRoleEnum('role').default('CUSTOMER').notNull(),
  createdAt: timestamp('created_at').defaultNow(),
});

export const restaurants = pgTable('restaurants', {
  id: uuid('id').defaultRandom().primaryKey(),
  managerId: uuid('manager_id').references(() => users.id),
  name: text('name').notNull(),
  cnpj: text('cnpj').unique(),
  description: text('description'),
  category: text('category').notNull(),
  deliveryFee: integer('delivery_fee').notNull().default(0), // Preço em centavos
  deliveryTime: text('delivery_time').notNull(),
  createdAt: timestamp('created_at').defaultNow(),
});

export const products = pgTable('products', {
  id: uuid('id').primaryKey().defaultRandom(),
  name: text('name').notNull(),
  price: numeric('price', { precision: 10, scale: 2 }).notNull(),
  restaurantId: uuid('restaurant_id').references(() => restaurants.id),
});

export const orders = pgTable('orders', {
  id: uuid('id').primaryKey().defaultRandom(),
  userId: uuid('user_id').references(() => users.id),
  restaurantId: uuid('restaurant_id').references(() => restaurants.id),
  status: orderStatusEnum('status').default('PENDING'),
  paymentStatus: paymentStatusEnum('payment_status').default('WAITING'),
  totalValue: numeric('total_value', { precision: 10, scale: 2 }).notNull(),
  createdAt: timestamp('created_at').defaultNow(),
});

export const orderItems = pgTable('order_items', {
  id: uuid('id').primaryKey().defaultRandom(),
  orderId: uuid('order_id').references(() => orders.id),
  productId: uuid('product_id').references(() => products.id),
  quantity: integer('quantity').notNull(),
  priceAtMoment: numeric('price_at_moment', { precision: 10, scale: 2 }).notNull(),
});

