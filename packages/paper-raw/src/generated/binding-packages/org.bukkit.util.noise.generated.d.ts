// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_org_bukkit from './org.bukkit.generated.js';

/** JVM abstract org.bukkit.util.noise.NoiseGenerator. */
export interface NoiseGeneratorMembers {
  noise(arg0: number): number;
  noise(arg0: number, arg1: number): number;
  noise(arg0: number, arg1: number, arg2: number): number;
  noise(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): number;
  noise(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean): number;
  noise(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): number;
  noise(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: boolean): number;
  noise(arg0: number, arg1: number, arg2: number, arg3: number): number;
  noise(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean): number;
  offsetX: number;
  offsetY: number;
  offsetZ: number;
  readonly perm: Array<number>;
}
export type NoiseGenerator = NoiseGeneratorMembers;
export interface NoiseGeneratorStatics {
  new(): NoiseGenerator;
  fade(arg0: number): number;
  floor(arg0: number): number;
  grad(arg0: number, arg1: number, arg2: number, arg3: number): number;
  lerp(arg0: number, arg1: number, arg2: number): number;
}

/** JVM abstract org.bukkit.util.noise.OctaveGenerator. */
export interface OctaveGeneratorMembers {
  getOctaves(): Array<NoiseGenerator>;
  getXScale(): number;
  getYScale(): number;
  getZScale(): number;
  noise(arg0: number, arg1: number, arg2: number): number;
  noise(arg0: number, arg1: number, arg2: number, arg3: number): number;
  noise(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): number;
  noise(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: boolean): number;
  noise(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean): number;
  noise(arg0: number, arg1: number, arg2: number, arg3: boolean): number;
  readonly octaves: Array<NoiseGenerator>;
  setScale(arg0: number): void;
  setXScale(arg0: number): void;
  setYScale(arg0: number): void;
  setZScale(arg0: number): void;
  xScale: number;
  yScale: number;
  zScale: number;
}
export type OctaveGenerator = OctaveGeneratorMembers;
export interface OctaveGeneratorStatics {
  new(arg0: Array<NoiseGenerator>): OctaveGenerator;
}

/** JVM class org.bukkit.util.noise.PerlinNoiseGenerator. */
export interface PerlinNoiseGeneratorMembers {
  readonly __javaSupertypes?: readonly [NoiseGenerator];
  noise(arg0: number, arg1: number, arg2: number): number;
}
export type PerlinNoiseGenerator = PerlinNoiseGeneratorMembers & NoiseGenerator;
export interface PerlinNoiseGeneratorStatics {
  new(): PerlinNoiseGenerator;
  new(arg0: bigint): PerlinNoiseGenerator;
  new(arg0: JavaOpaque<"java.util.Random">): PerlinNoiseGenerator;
  new(arg0: j_org_bukkit.World): PerlinNoiseGenerator;
  getInstance(): PerlinNoiseGenerator;
  getNoise(arg0: number): number;
  getNoise(arg0: number, arg1: number): number;
  getNoise(arg0: number, arg1: number, arg2: number): number;
  getNoise(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): number;
  getNoise(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): number;
  getNoise(arg0: number, arg1: number, arg2: number, arg3: number): number;
  readonly grad3: Array<Array<number>>;
}

/** JVM class org.bukkit.util.noise.PerlinOctaveGenerator. */
export interface PerlinOctaveGeneratorMembers {
  readonly __javaSupertypes?: readonly [OctaveGenerator];
}
export type PerlinOctaveGenerator = PerlinOctaveGeneratorMembers & OctaveGenerator;
export interface PerlinOctaveGeneratorStatics {
  new(arg0: bigint, arg1: number): PerlinOctaveGenerator;
  new(arg0: JavaOpaque<"java.util.Random">, arg1: number): PerlinOctaveGenerator;
  new(arg0: j_org_bukkit.World, arg1: number): PerlinOctaveGenerator;
}

/** JVM class org.bukkit.util.noise.SimplexNoiseGenerator. */
export interface SimplexNoiseGeneratorMembers {
  readonly __javaSupertypes?: readonly [PerlinNoiseGenerator];
  noise(arg0: number, arg1: number): number;
  noise(arg0: number, arg1: number, arg2: number): number;
  noise(arg0: number, arg1: number, arg2: number, arg3: number): number;
  offsetW: number;
}
export type SimplexNoiseGenerator = SimplexNoiseGeneratorMembers & PerlinNoiseGenerator;
export interface SimplexNoiseGeneratorStatics {
  new(): SimplexNoiseGenerator;
  new(arg0: bigint): SimplexNoiseGenerator;
  new(arg0: JavaOpaque<"java.util.Random">): SimplexNoiseGenerator;
  new(arg0: j_org_bukkit.World): SimplexNoiseGenerator;
  readonly F2: number;
  readonly F3: 0.3333333333333333;
  readonly F4: number;
  readonly G2: number;
  readonly G22: number;
  readonly G3: 0.16666666666666666;
  readonly G4: number;
  readonly G42: number;
  readonly G43: number;
  readonly G44: number;
  readonly SQRT_3: number;
  readonly SQRT_5: number;
  dot(arg0: Array<number>, arg1: number, arg2: number): number;
  dot(arg0: Array<number>, arg1: number, arg2: number, arg3: number): number;
  dot(arg0: Array<number>, arg1: number, arg2: number, arg3: number, arg4: number): number;
  getInstance(): SimplexNoiseGenerator;
  getNoise(arg0: number): number;
  getNoise(arg0: number, arg1: number): number;
  getNoise(arg0: number, arg1: number, arg2: number): number;
  getNoise(arg0: number, arg1: number, arg2: number, arg3: number): number;
  readonly grad4: Array<Array<number>>;
  readonly simplex: Array<Array<number>>;
}

/** JVM class org.bukkit.util.noise.SimplexOctaveGenerator. */
export interface SimplexOctaveGeneratorMembers {
  readonly __javaSupertypes?: readonly [OctaveGenerator];
  getWScale(): number;
  noise(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): number;
  noise(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean): number;
  setScale(arg0: number): void;
  setWScale(arg0: number): void;
}
export type SimplexOctaveGenerator = SimplexOctaveGeneratorMembers & OctaveGenerator;
export interface SimplexOctaveGeneratorStatics {
  new(arg0: bigint, arg1: number): SimplexOctaveGenerator;
  new(arg0: JavaOpaque<"java.util.Random">, arg1: number): SimplexOctaveGenerator;
  new(arg0: j_org_bukkit.World, arg1: number): SimplexOctaveGenerator;
}
