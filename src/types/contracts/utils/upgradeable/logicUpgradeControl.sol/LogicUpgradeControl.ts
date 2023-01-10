/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../../../common";

export declare namespace ILogicUpgradeControl {
  export type UpgradeLayoutStruct = {
    upgradeDelay: PromiseOrValue<BigNumberish>;
    activateTime: PromiseOrValue<BigNumberish>;
    pendingImplementation: PromiseOrValue<string>;
    __gap: PromiseOrValue<BigNumberish>[];
  };

  export type UpgradeLayoutStructOutput = [
    number,
    BigNumber,
    string,
    BigNumber[]
  ] & {
    upgradeDelay: number;
    activateTime: BigNumber;
    pendingImplementation: string;
    __gap: BigNumber[];
  };
}

export interface LogicUpgradeControlInterface extends utils.Interface {
  functions: {
    "logicUpgradeInfo()": FunctionFragment;
    "upgrade()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "logicUpgradeInfo" | "upgrade"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "logicUpgradeInfo",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "upgrade", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "logicUpgradeInfo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "upgrade", data: BytesLike): Result;

  events: {
    "PreUpgrade(address,uint64)": EventFragment;
    "Upgraded(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "PreUpgrade"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Upgraded"): EventFragment;
}

export interface PreUpgradeEventObject {
  newLogic: string;
  activateTime: BigNumber;
}
export type PreUpgradeEvent = TypedEvent<
  [string, BigNumber],
  PreUpgradeEventObject
>;

export type PreUpgradeEventFilter = TypedEventFilter<PreUpgradeEvent>;

export interface UpgradedEventObject {
  newImplementation: string;
}
export type UpgradedEvent = TypedEvent<[string], UpgradedEventObject>;

export type UpgradedEventFilter = TypedEventFilter<UpgradedEvent>;

export interface LogicUpgradeControl extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: LogicUpgradeControlInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    logicUpgradeInfo(
      overrides?: CallOverrides
    ): Promise<[ILogicUpgradeControl.UpgradeLayoutStructOutput]>;

    upgrade(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  logicUpgradeInfo(
    overrides?: CallOverrides
  ): Promise<ILogicUpgradeControl.UpgradeLayoutStructOutput>;

  upgrade(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    logicUpgradeInfo(
      overrides?: CallOverrides
    ): Promise<ILogicUpgradeControl.UpgradeLayoutStructOutput>;

    upgrade(overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    "PreUpgrade(address,uint64)"(
      newLogic?: null,
      activateTime?: null
    ): PreUpgradeEventFilter;
    PreUpgrade(newLogic?: null, activateTime?: null): PreUpgradeEventFilter;

    "Upgraded(address)"(newImplementation?: null): UpgradedEventFilter;
    Upgraded(newImplementation?: null): UpgradedEventFilter;
  };

  estimateGas: {
    logicUpgradeInfo(overrides?: CallOverrides): Promise<BigNumber>;

    upgrade(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    logicUpgradeInfo(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    upgrade(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}