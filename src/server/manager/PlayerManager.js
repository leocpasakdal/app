module.exports = dispatchManager => {
  const players = new Map();

  const addPlayer = (context, info) => {
    const {
      client: { id }
    } = context;

    const { avatarId, teamName } = info;

    const player = new Map();

    player.set('context', context);
    player.set('id', id);
    player.set('teamName', teamName);
    player.set('avatarId', avatarId);
    player.set('turn', false);

    players.set(id, player);
  };

  const removePlayer = id => {
    players.delete(id);
  };

  const getPlayer = id => players.get(id);

  const isPlayerTurn = id => {
    const player = getPlayer(id);

    return player ? player.get('turn') : false;
  };

  const isPlayerValid = id => !!getPlayer(id);

  const getPlayerContext = id =>
    isPlayerValid(id) ? getPlayer(id).get('context') : {};

  const setPlayerTurn = ({ id, turn }) => {
    const player = getPlayer(id);

    player.set('turn', turn);
  };

  const setPlayersTurns = id => {
    const playerValues = Array.from(players.values());
    const foundPlayer = playerValues.find(player => player.get('id') !== id);

    setPlayerTurn({ id: foundPlayer.get('id'), turn: true });
    setPlayerTurn({ id, turn: false });
  };

  const dispatchTurns = forceFalse => {
    for (let [, player] of players.entries()) {
      dispatchManager.turn({
        dispatch: player.get('context').dispatch,
        turn: forceFalse ? false : player.get('turn')
      });
    }
  };

  const setTurns = (id, forceFalse) => {
    setPlayersTurns(id);
    dispatchTurns(forceFalse);
  };

  const clear = () => {
    players.clear();
  };

  const getLastConnectedPlayer = () => Array.from(players.values()).pop();

  const isPlayerListFull = () => players.size === 2;

  const isLastConnectedPlayer = id => {
    const lastPlayer = getLastConnectedPlayer();

    return isPlayerListFull() && id === lastPlayer.get('context').client.id;
  };

  const getPlayerInfo = id => {
    const player = getPlayer(id);

    return {
      id: player.get('id'),
      teamName: player.get('teamname'),
      avatarId: player.get('avatarId')
    };
  };

  const dispatchFinish = winner => {
    players.forEach((player, id) => {
      dispatchManager.finish({
        dispatch: getPlayerContext(id).dispatch,
        winner: winner === id
      });
    });
  };

  const sendResult = ({ id, result }) => {
    const { dispatch } = getPlayerContext(id);

    dispatchManager.result({
      dispatch,
      result
    });

    setPlayerTurn({ id, turn: true });
  };

  const sendStatus = ({ id, hasWinner }) => {
    if (hasWinner) {
      dispatchFinish(id);
    }

    setTurns(id, hasWinner);
  };

  return {
    addPlayer,
    clear,
    getPlayerContext,
    getPlayerInfo,
    isLastConnectedPlayer,
    isPlayerListFull,
    isPlayerTurn,
    isPlayerValid,
    removePlayer,
    sendStatus,
    sendResult
  };
};
