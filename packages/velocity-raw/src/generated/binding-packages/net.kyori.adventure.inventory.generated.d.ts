// Generated from velocity 3.4.0 (velocity-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_kyori_adventure_builder from './net.kyori.adventure.builder.generated.js';
import type * as j_net_kyori_adventure_text from './net.kyori.adventure.text.generated.js';
import type * as j_net_kyori_adventure_util from './net.kyori.adventure.util.generated.js';

/** JVM interface net.kyori.adventure.inventory.Book. */
export interface BookMembers {
  readonly __javaSupertypes?: readonly [j_net_kyori_adventure_util.Buildable<Book, Book_Builder>, JavaOpaque<"net.kyori.examination.Examinable">];
  author(): j_net_kyori_adventure_text.Component;
  author(arg0: j_net_kyori_adventure_text.Component): Book;
  pages(): JavaList<j_net_kyori_adventure_text.Component>;
  pages(arg0: JavaList<j_net_kyori_adventure_text.Component>): Book;
  pages(...arg0: Array<j_net_kyori_adventure_text.Component>): Book;
  title(): j_net_kyori_adventure_text.Component;
  title(arg0: j_net_kyori_adventure_text.Component): Book;
  toBuilder(): Book_Builder;
}
export type Book = BookMembers & JavaOpaque<"net.kyori.examination.Examinable">;
export interface BookStatics {
  book(arg0: j_net_kyori_adventure_text.Component, arg1: j_net_kyori_adventure_text.Component, arg2: JavaCollection<j_net_kyori_adventure_text.Component>): Book;
  book(arg0: j_net_kyori_adventure_text.Component, arg1: j_net_kyori_adventure_text.Component, ...arg2: Array<j_net_kyori_adventure_text.Component>): Book;
  builder(): Book_Builder;
}

/** JVM interface net.kyori.adventure.inventory.Book$Builder. */
export interface Book_BuilderMembers {
  readonly __javaSupertypes?: readonly [j_net_kyori_adventure_builder.AbstractBuilder<Book>, j_net_kyori_adventure_util.Buildable_Builder<Book>];
  addPage(arg0: j_net_kyori_adventure_text.Component): Book_Builder;
  author(arg0: j_net_kyori_adventure_text.Component): Book_Builder;
  build(): Book;
  pages(arg0: JavaCollection<j_net_kyori_adventure_text.Component>): Book_Builder;
  pages(...arg0: Array<j_net_kyori_adventure_text.Component>): Book_Builder;
  title(arg0: j_net_kyori_adventure_text.Component): Book_Builder;
}
export type Book_Builder = Book_BuilderMembers;
export interface Book_BuilderStatics {
}
