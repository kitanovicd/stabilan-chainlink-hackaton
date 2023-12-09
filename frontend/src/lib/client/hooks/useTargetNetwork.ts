import { useEffect } from "react";
import { useNetwork } from "wagmi";

import scaffoldConfig from "../../../../scaffold.config";

import {
  ChainWithAttributes,
  NETWORKS_EXTRA_DATA,
} from "lib/scaffold-lib/utils/scaffold-eth";
import { useGlobalState } from "lib/scaffold-lib/services/store/store";

export function useTargetNetwork(): { targetNetwork: ChainWithAttributes } {
  const { chain } = useNetwork();
  const targetNetwork = useGlobalState(({ targetNetwork }) => targetNetwork);
  const setTargetNetwork = useGlobalState(
    ({ setTargetNetwork }) => setTargetNetwork
  );

  useEffect(() => {
    const newSelectedNetwork = scaffoldConfig.targetNetworks.find(
      (targetNetwork) => targetNetwork.id === chain?.id
    );
    if (newSelectedNetwork && newSelectedNetwork.id !== targetNetwork.id) {
      setTargetNetwork(newSelectedNetwork);
    }
  }, [chain?.id, setTargetNetwork, targetNetwork.id]);

  return {
    targetNetwork: {
      ...targetNetwork,
      ...NETWORKS_EXTRA_DATA[targetNetwork.id],
    },
  };
}
