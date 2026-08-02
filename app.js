
const CONTRACT_ADDRESS = '0x65F1Cb4f72520084da9B940C31C57FA070A64d96';
const ABI = [{"inputs":[{"internalType":"address","name":"_creatorWallet","type":"address"},{"internalType":"uint256","name":"_ticketPrice","type":"uint256"},{"internalType":"uint256","name":"_bossEntryFee","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"AlreadyClaimed","type":"error"},{"inputs":[],"name":"AlreadyJoined","type":"error"},{"inputs":[],"name":"AuctionNotOver","type":"error"},{"inputs":[],"name":"AuctionOver","type":"error"},{"inputs":[],"name":"BelowMinimumDeposit","type":"error"},{"inputs":[],"name":"BidTooLow","type":"error"},{"inputs":[],"name":"InsufficientDeposit","type":"error"},{"inputs":[],"name":"InvalidAvatar","type":"error"},{"inputs":[],"name":"InvalidRound","type":"error"},{"inputs":[],"name":"InvalidSlot","type":"error"},{"inputs":[],"name":"InvalidUsername","type":"error"},{"inputs":[],"name":"LeaderboardSpotNotEarned","type":"error"},{"inputs":[],"name":"MaxEquipmentLevel","type":"error"},{"inputs":[],"name":"NoParticipants","type":"error"},{"inputs":[],"name":"NotJoined","type":"error"},{"inputs":[],"name":"NothingPending","type":"error"},{"inputs":[],"name":"RoundAlreadyClosed","type":"error"},{"inputs":[],"name":"RoundNotOver","type":"error"},{"inputs":[],"name":"SeasonNotFinalized","type":"error"},{"inputs":[],"name":"SeasonNotOver","type":"error"},{"inputs":[],"name":"SeasonOver","type":"error"},{"inputs":[],"name":"TooManyPlayers","type":"error"},{"inputs":[],"name":"TransferFailed","type":"error"},{"inputs":[],"name":"WrongEntryFee","type":"error"},{"inputs":[],"name":"ZeroAmount","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"roundId","type":"uint256"},{"indexed":true,"internalType":"address","name":"bidder","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newDeadline","type":"uint256"}],"name":"AuctionBid","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"roundId","type":"uint256"},{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"AuctionPrizeClaimed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"roundId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"pot","type":"uint256"},{"indexed":false,"internalType":"address[]","name":"lastBidders","type":"address[]"},{"indexed":false,"internalType":"uint256[]","name":"prizes","type":"uint256[]"}],"name":"AuctionRoundClosed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"seasonId","type":"uint256"},{"indexed":true,"internalType":"address","name":"player","type":"address"},{"indexed":false,"internalType":"uint256","name":"slot","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newLevel","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newPower","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"cost","type":"uint256"}],"name":"BossEquipmentUpgraded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"seasonId","type":"uint256"},{"indexed":true,"internalType":"address","name":"player","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"BossPrizeClaimed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"seasonId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"prizePool","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"totalDamage","type":"uint256"}],"name":"BossSeasonFinalized","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"seasonId","type":"uint256"},{"indexed":true,"internalType":"address","name":"player","type":"address"},{"indexed":false,"internalType":"uint256","name":"power","type":"uint256"}],"name":"BossSeasonJoined","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Claim","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"grossAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"toPrincipal","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"toPool","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"toCreator","type":"uint256"}],"name":"Compound","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"grossAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"toPrincipal","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"toPool","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"toCreator","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newAccRewardPerShare","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"rateBps","type":"uint256"},{"indexed":false,"internalType":"bool","name":"savingsMode","type":"bool"}],"name":"Distribution","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"xp","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"rank","type":"uint256"}],"name":"LeaderboardSpotClaimed","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"savingsModeActive","type":"bool"},{"indexed":false,"internalType":"uint256","name":"newRateBps","type":"uint256"}],"name":"ModeChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"string","name":"username","type":"string"},{"indexed":false,"internalType":"uint8","name":"avatarId","type":"uint8"}],"name":"ProfileUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"roundId","type":"uint256"},{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"RafflePrizeClaimed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"roundId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"pot","type":"uint256"},{"indexed":false,"internalType":"address[10]","name":"winners","type":"address[10]"},{"indexed":false,"internalType":"uint256[10]","name":"prizes","type":"uint256[10]"}],"name":"RaffleRoundClosed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"roundId","type":"uint256"},{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"tickets","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"potContribution","type":"uint256"}],"name":"RaffleTicketBought","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"principalAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"netPaid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"toPool","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"toCreator","type":"uint256"}],"name":"Withdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newTotal","type":"uint256"}],"name":"XPGained","type":"event"},{"inputs":[],"name":"ACC_PRECISION","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"AUCTION_BID_STEP","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"AUCTION_EXTENSION","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"AUCTION_INITIAL_DURATION","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"AUCTION_START_BID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"BASE_HERO_POWER","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"BPS_DENOMINATOR","outputs":[{"internalType":"uint16","name":"","type":"uint16"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"DAILY_RATE_MAX_BPS","outputs":[{"internalType":"uint16","name":"","type":"uint16"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"DAILY_RATE_MIN_BPS","outputs":[{"internalType":"uint16","name":"","type":"uint16"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"DAILY_RATE_STEP_BPS","outputs":[{"internalType":"uint16","name":"","type":"uint16"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"DEPOSIT_TO_CREATOR_BPS","outputs":[{"internalType":"uint16","name":"","type":"uint16"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"DEPOSIT_TO_POOL_BPS","outputs":[{"internalType":"uint16","name":"","type":"uint16"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"DEPOSIT_TO_PRINCIPAL_BPS","outputs":[{"internalType":"uint16","name":"","type":"uint16"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"EQUIPMENT_BASE_COST","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"EQUIPMENT_POWER_PER_LEVEL","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"EQUIP_SLOT_COUNT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"LEADERBOARD_SIZE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_AVATAR_ID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_BOSS_PLAYERS","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_EQUIPMENT_LEVEL","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_RAFFLE_ENTRIES","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_USERNAME_LENGTH","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MIN_DEPOSIT_AMOUNT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"PRIZE_SPLIT_BPS","outputs":[{"internalType":"uint16","name":"","type":"uint16"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"SEASON_DURATION","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"SECONDS_PER_DAY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"WINDOW_30_DAYS","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"WITHDRAW_FEE_BPS","outputs":[{"internalType":"uint16","name":"","type":"uint16"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"WITHDRAW_FEE_TO_CREATOR_BPS","outputs":[{"internalType":"uint16","name":"","type":"uint16"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"WITHDRAW_FEE_TO_POOL_BPS","outputs":[{"internalType":"uint16","name":"","type":"uint16"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"XP_PER_AUCTION_BID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"XP_PER_BNB_CLAIMED","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"XP_PER_BNB_DEPOSITED","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"XP_PER_BOSS_DAMAGE_UNIT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"XP_PER_RAFFLE_TICKET","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"accRewardPerShare","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"auctionClaimable","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"auctionCurrentBid","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"auctionCurrentLeader","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"auctionDeadline","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"auctionPot","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"auctionRoundClosed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"auctionRoundId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"auctionWonAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"bossEntryFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"bossEquipmentLevel","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"bossPlayers","outputs":[{"internalType":"uint256","name":"power","type":"uint256"},{"internalType":"uint256","name":"totalDamage","type":"uint256"},{"internalType":"uint256","name":"lastCheckpoint","type":"uint256"},{"internalType":"bool","name":"joined","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"bossPrizeClaimed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"bossPrizePool","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"bossSeasonEnd","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"bossSeasonFinalizedByRound","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"bossSeasonId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"bossSeasonPrizePoolFinal","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"bossSeasonStart","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"bossSeasonTotalDamage","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"bossSeasonTotalDamageFinal","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"bossSettleCursor","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"numTickets","type":"uint256"}],"name":"buyRaffleTickets","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"claim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"roundId","type":"uint256"}],"name":"claimAuctionPrize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"seasonId","type":"uint256"}],"name":"claimBossPrize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"claimLeaderboardSpot","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"roundId","type":"uint256"}],"name":"claimRafflePrize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"closeAuctionRound","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"closeRaffleRound","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"compound","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"creatorWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"currentDailyRateBps","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"daysRecorded","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"deposit","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"distribute","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"dividendPool","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getAuctionInfo","outputs":[{"internalType":"uint256","name":"roundId","type":"uint256"},{"internalType":"uint256","name":"pot","type":"uint256"},{"internalType":"uint256","name":"currentBid","type":"uint256"},{"internalType":"address","name":"leader","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint256","name":"nextBidRequired","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getAuctionRanking","outputs":[{"internalType":"address[]","name":"ranking","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"roundId","type":"uint256"}],"name":"getAuctionWinners","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"seasonId","type":"uint256"}],"name":"getBossLeaderboard","outputs":[{"internalType":"address[]","name":"addrs","type":"address[]"},{"internalType":"uint256[]","name":"damages","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"seasonId","type":"uint256"},{"internalType":"address","name":"player","type":"address"}],"name":"getBossPlayerInfo","outputs":[{"components":[{"internalType":"uint256","name":"power","type":"uint256"},{"internalType":"uint256","name":"liveDamage","type":"uint256"},{"internalType":"uint256","name":"settledDamage","type":"uint256"},{"internalType":"uint256[4]","name":"equipLevels","type":"uint256[4]"},{"internalType":"bool","name":"joined","type":"bool"},{"internalType":"bool","name":"claimed","type":"bool"}],"internalType":"struct BNBDividendBank.BossPlayerView","name":"info","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getBossSeasonInfo","outputs":[{"internalType":"uint256","name":"seasonId","type":"uint256"},{"internalType":"uint256","name":"seasonStart","type":"uint256"},{"internalType":"uint256","name":"seasonEnd","type":"uint256"},{"internalType":"uint256","name":"prizePool","type":"uint256"},{"internalType":"uint256","name":"participantsCount","type":"uint256"},{"internalType":"uint256","name":"timeRemaining","type":"uint256"},{"internalType":"bool","name":"settling","type":"bool"},{"internalType":"uint256","name":"settleCursor","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"n","type":"uint256"}],"name":"getIncomeStats","outputs":[{"internalType":"uint256","name":"income","type":"uint256"},{"internalType":"uint256","name":"payout","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"seasonId","type":"uint256"},{"internalType":"address","name":"player","type":"address"},{"internalType":"uint256","name":"slot","type":"uint256"}],"name":"getNextEquipmentCost","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getProtocolStats","outputs":[{"components":[{"internalType":"uint256","name":"tvl","type":"uint256"},{"internalType":"uint256","name":"dividendPoolBalance","type":"uint256"},{"internalType":"uint256","name":"usersCount","type":"uint256"},{"internalType":"uint256","name":"dailyRateBps","type":"uint256"},{"internalType":"uint256","name":"dailyRewardEstimate","type":"uint256"},{"internalType":"uint256","name":"creatorEarnings","type":"uint256"},{"internalType":"uint256","name":"totalDistributed","type":"uint256"},{"internalType":"uint256","name":"totalDepositsCount_","type":"uint256"},{"internalType":"uint256","name":"totalWithdrawalsCount_","type":"uint256"},{"internalType":"uint256","name":"totalClaimsCount_","type":"uint256"},{"internalType":"uint256","name":"totalCompoundsCount_","type":"uint256"},{"internalType":"bool","name":"savingsMode","type":"bool"},{"internalType":"uint256","name":"maxPoolEver","type":"uint256"},{"internalType":"uint256","name":"minPoolEver","type":"uint256"},{"internalType":"uint256","name":"largestDeposit_","type":"uint256"},{"internalType":"uint256","name":"largestClaim_","type":"uint256"},{"internalType":"uint256","name":"largestCompound_","type":"uint256"},{"internalType":"uint256","name":"savingsModeEntries_","type":"uint256"}],"internalType":"struct BNBDividendBank.ProtocolStats","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getRaffleInfo","outputs":[{"internalType":"uint256","name":"roundId","type":"uint256"},{"internalType":"uint256","name":"roundStart","type":"uint256"},{"internalType":"uint256","name":"pot","type":"uint256"},{"internalType":"uint256","name":"entriesCount","type":"uint256"},{"internalType":"uint256","name":"timeRemaining","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"roundId","type":"uint256"}],"name":"getRaffleWinners","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"getUserStats","outputs":[{"components":[{"internalType":"uint256","name":"depositAmount","type":"uint256"},{"internalType":"uint256","name":"shareBps","type":"uint256"},{"internalType":"uint256","name":"pending","type":"uint256"},{"internalType":"uint256","name":"lifetimeClaimed","type":"uint256"},{"internalType":"uint256","name":"totalDeposited","type":"uint256"},{"internalType":"uint256","name":"totalWithdrawn","type":"uint256"},{"internalType":"uint256","name":"totalCompounded","type":"uint256"},{"internalType":"int256","name":"roiBps","type":"int256"},{"internalType":"uint256","name":"feesRecoveredBps","type":"uint256"}],"internalType":"struct BNBDividendBank.UserStats","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getXPLeaderboard","outputs":[{"internalType":"address[]","name":"addrs","type":"address[]"},{"internalType":"uint256[]","name":"xps","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"joinBossSeason","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"largestClaim","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"largestCompound","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"largestDeposit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lastDistributionAt","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"lifetimeActivity","outputs":[{"internalType":"uint256","name":"raffleTickets","type":"uint256"},{"internalType":"uint256","name":"auctionBids","type":"uint256"},{"internalType":"uint256","name":"bossSeasonsJoined","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxDividendPoolEver","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minDividendPoolEver","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"pendingRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"placeBid","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"profiles","outputs":[{"internalType":"string","name":"username","type":"string"},{"internalType":"uint8","name":"avatarId","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"raffleClaimable","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"raffleRoundClosed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"raffleRoundId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"raffleRoundPot","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"raffleRoundStart","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"raffleTicketsOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"raffleWonAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"ringCursor","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"savingsModeActive","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"savingsModeEntries","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"username","type":"string"},{"internalType":"uint8","name":"avatarId","type":"uint8"}],"name":"setProfile","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"count","type":"uint256"}],"name":"settleBossBatch","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"ticketPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalClaimsCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalCompoundsCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalCreatorEarnings","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalDepositsCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalDividendsDistributed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalPrincipal","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalUsers","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalWithdrawalsCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"totalXP","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"slot","type":"uint256"}],"name":"upgradeBossEquipment","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"users","outputs":[{"internalType":"uint256","name":"deposit","type":"uint256"},{"internalType":"uint256","name":"rewardDebt","type":"uint256"},{"internalType":"uint256","name":"lifetimeClaimed","type":"uint256"},{"internalType":"uint256","name":"totalDeposited","type":"uint256"},{"internalType":"uint256","name":"totalWithdrawn","type":"uint256"},{"internalType":"uint256","name":"totalCompounded","type":"uint256"},{"internalType":"uint256","name":"firstDepositAt","type":"uint256"},{"internalType":"uint256","name":"lastInteractionAt","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}];

const IMPACT_GOLD_URL = 'assets/impact_gold.webp';
const IMPACT_RED_URL = 'assets/impact_red.webp';
const PRIZE_SPLIT_BPS = [2500,1800,1400,1100,900,700,550,450,350,250];

const EQUIP_SLOT_LABELS = ['Arma (daño)', 'Armadura (vida)', 'Casco (poder)', 'Botas (velocidad)'];
const EQUIP_ICONS = [
  // Espada
  `<svg class="equip-icon" viewBox="0 0 34 34" fill="none"><path d="M17 4 L17 22" stroke="var(--gold)" stroke-width="2.5" stroke-linecap="round"/><path d="M9 15 L25 15" stroke="var(--gold)" stroke-width="2.5" stroke-linecap="round"/><path d="M13 22 L21 22 L19 29 L15 29 Z" fill="var(--gold)"/><circle cx="17" cy="4" r="2.5" fill="var(--gold)"/></svg>`,
  // Armadura (escudo)
  `<svg class="equip-icon" viewBox="0 0 34 34" fill="none"><path d="M17 4 L28 8 V16 C28 23 23 28 17 31 C11 28 6 23 6 16 V8 Z" stroke="var(--gold)" stroke-width="2.5" stroke-linejoin="round"/><path d="M17 10 V24" stroke="var(--gold)" stroke-width="2"/></svg>`,
  // Casco
  `<svg class="equip-icon" viewBox="0 0 34 34" fill="none"><path d="M7 20 C7 10 12 5 17 5 C22 5 27 10 27 20" stroke="var(--gold)" stroke-width="2.5" stroke-linecap="round"/><path d="M5 20 H29 V24 H5 Z" stroke="var(--gold)" stroke-width="2.5" stroke-linejoin="round"/><rect x="14" y="20" width="6" height="6" fill="var(--gold)"/></svg>`,
  // Botas
  `<svg class="equip-icon" viewBox="0 0 34 34" fill="none"><path d="M13 5 V18 L9 22 C7 24 7 27 7 29 H27 C27 25 24 22 20 21 L17 20 V5 Z" stroke="var(--gold)" stroke-width="2.5" stroke-linejoin="round"/><path d="M7 29 H27" stroke="var(--gold)" stroke-width="2.5"/></svg>`
];

let provider, signer, contract, userAddr = null;
let historyChart = null;
let chartLabels = [], chartTvl = [], chartPool = [];
const MAX_HISTORY_POINTS = 200;

function historyStorageKey(addr){ return 'bnbBank_history_' + addr.toLowerCase(); }

function loadHistory(addr){
  try{
    const raw = localStorage.getItem(historyStorageKey(addr));
    if(raw){
      const data = JSON.parse(raw);
      chartLabels = data.labels || [];
      chartTvl = data.tvl || [];
      chartPool = data.pool || [];
    }
  }catch(e){ /* localStorage no disponible o dato corrupto: empezamos de cero */ }
}
function saveHistory(addr){
  try{
    localStorage.setItem(historyStorageKey(addr), JSON.stringify({ labels: chartLabels, tvl: chartTvl, pool: chartPool }));
  }catch(e){ /* almacenamiento lleno o bloqueado: seguimos sin persistir */ }
}
function initChart(){
  if(typeof Chart === 'undefined'){
    console.warn('Chart.js no se cargó (¿CDN bloqueado?). El gráfico histórico no estará disponible, el resto del dashboard funciona con normalidad.');
    return;
  }
  const ctx = document.getElementById('historyChart').getContext('2d');
  const gradTvl = ctx.createLinearGradient(0, 0, 0, 220);
  gradTvl.addColorStop(0, 'rgba(240,185,11,0.35)');
  gradTvl.addColorStop(1, 'rgba(240,185,11,0.0)');
  const gradPool = ctx.createLinearGradient(0, 0, 0, 220);
  gradPool.addColorStop(0, 'rgba(61,214,140,0.30)');
  gradPool.addColorStop(1, 'rgba(61,214,140,0.0)');
  historyChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: chartLabels,
      datasets: [
        { label: 'TVL (Tesoro)', data: chartTvl, borderColor: '#F0B90B', backgroundColor: gradTvl, fill: true, tension: 0.35, pointRadius: 0, pointHoverRadius: 5, pointHoverBackgroundColor:'#F0B90B', pointHoverBorderColor:'#1A1300', borderWidth: 2.5 },
        { label: 'Dividend Pool', data: chartPool, borderColor: '#3DD68C', backgroundColor: gradPool, fill: true, tension: 0.35, pointRadius: 0, pointHoverRadius: 5, pointHoverBackgroundColor:'#3DD68C', pointHoverBorderColor:'#08150F', borderWidth: 2.5 }
      ]
    },
    options: {
      responsive: true,
      animation: { duration: 500, easing: 'easeOutQuart' },
      interaction: { mode: 'index', intersect: false },
      scales: {
        x: { ticks: { color: '#7C8894', maxTicksLimit: 8 }, grid: { color: '#232C38' } },
        y: { ticks: { color: '#7C8894' }, grid: { color: '#232C38' } }
      },
      plugins: {
        legend: { labels: { color: '#E8ECF1', font: { family: 'Inter' } } },
        tooltip: {
          backgroundColor: '#0F1216', borderColor: '#232C38', borderWidth: 1,
          titleColor: '#E8ECF1', bodyColor: '#E8ECF1', padding: 10, cornerRadius: 4
        }
      }
    }
  });
}
function pushHistoryPoint(tvlWei, poolWei, addr){
  const now = new Date();
  const label = now.toLocaleTimeString('es-ES', { hour:'2-digit', minute:'2-digit', second:'2-digit' });
  chartLabels.push(label);
  chartTvl.push(parseFloat(ethers.formatEther(tvlWei)));
  chartPool.push(parseFloat(ethers.formatEther(poolWei)));
  if(chartLabels.length > MAX_HISTORY_POINTS){
    chartLabels.shift(); chartTvl.shift(); chartPool.shift();
  }
  if(historyChart){
    historyChart.data.labels = chartLabels;
    historyChart.data.datasets[0].data = chartTvl;
    historyChart.data.datasets[1].data = chartPool;
    historyChart.update('none');
  }
  saveHistory(addr);
}

// ---- calculadora de deposito ----
let lastKnownUserDeposit = 0;
function updateCalculator(){
  const slider = document.getElementById('calcSlider');
  if(!slider) return;
  const amount = parseFloat(slider.value) || 0;
  document.getElementById('calc-amount-label').textContent = amount.toLocaleString('es-ES');
  const netDeposit = amount * 0.9;
  document.getElementById('calc-netdeposit').textContent = netDeposit.toFixed(5)+' BNB';
  const perBnbFraction = window.__perBnbFraction || 0;
  const daily = netDeposit * perBnbFraction;
  document.getElementById('calc-daily').textContent = daily.toFixed(5)+' BNB';
  document.getElementById('calc-weekly').textContent = (daily*7).toFixed(5)+' BNB';
  document.getElementById('calc-monthly').textContent = (daily*30).toFixed(5)+' BNB';
  document.getElementById('calc-yearly').textContent = (daily*365).toFixed(5)+' BNB';
}
document.getElementById('calcSlider').addEventListener('input', updateCalculator);

// ---- objetivo personal (persistido en localStorage por contrato+wallet) ----
function goalStorageKey(addr){ return 'bnbBank_goal_' + CONTRACT_ADDRESS.toLowerCase() + '_' + addr.toLowerCase(); }
function loadGoal(addr){
  try{ return parseFloat(localStorage.getItem(goalStorageKey(addr))) || 0; }catch(e){ return 0; }
}
function saveGoal(addr, value){
  try{ localStorage.setItem(goalStorageKey(addr), String(value)); }catch(e){ /* no disponible */ }
}
function updateGoalProgress(userDepositNum){
  lastKnownUserDeposit = userDepositNum;
  if(!userAddr) return;
  const goal = loadGoal(userAddr);
  const wrap = document.getElementById('goal-progress-wrap');
  if(!goal || goal <= 0){
    wrap.style.display = 'none';
    return;
  }
  wrap.style.display = 'block';
  const pct = Math.min(100, (userDepositNum / goal) * 100);
  document.getElementById('goal-bar').style.width = pct.toFixed(1)+'%';
  document.getElementById('goal-label').textContent = userDepositNum.toFixed(5)+' / '+goal.toFixed(5)+' BNB';
  document.getElementById('goal-pct').textContent = pct.toFixed(1)+'%';
  if(pct >= 100){
    document.getElementById('goal-bar').style.background = 'var(--mint)';
  }
}
document.getElementById('btnSetGoal').addEventListener('click', ()=>{
  if(!userAddr){ toast('Conecta tu wallet primero.', true); return; }
  const val = parseFloat(document.getElementById('goalInput').value);
  if(!val || val <= 0){ toast('Introduce una meta válida.', true); return; }
  saveGoal(userAddr, val);
  updateGoalProgress(lastKnownUserDeposit);
  toast('Objetivo guardado.');
});

let raffleDeadline = 0, auctionDeadlineTs = 0, distributionDeadline = 0, bossDeadline = 0;

function fmt(bnWei, decimals=5){
  try{
    const s = ethers.formatEther(bnWei);
    const n = parseFloat(s);
    return n.toLocaleString('es-ES',{minimumFractionDigits:decimals, maximumFractionDigits:decimals});
  }catch(e){ return (0).toFixed(decimals); }
}
function bpsToPct(bps){ return (Number(bps)/100).toFixed(2)+'%'; }

// ---- animar un número hacia su nuevo valor, en vez de saltar de golpe ----
const __animatingEls = new WeakMap();
function animateValue(el, endValue, decimals=5, suffix='', duration=700){
  if(!el) return;
  const prevRaf = __animatingEls.get(el);
  if(prevRaf) cancelAnimationFrame(prevRaf);
  const startText = (el.textContent || '0').replace(/\./g,'').replace(',','.').replace(/[^\d.\-]/g,'');
  const start = parseFloat(startText) || 0;
  const startTime = performance.now();
  function step(now){
    const t = Math.min(1, (now-startTime)/duration);
    const eased = 1 - Math.pow(1-t, 3);
    const val = start + (endValue-start)*eased;
    el.textContent = val.toLocaleString('es-ES',{minimumFractionDigits:decimals, maximumFractionDigits:decimals}) + suffix;
    if(t < 1){
      __animatingEls.set(el, requestAnimationFrame(step));
    } else {
      __animatingEls.delete(el);
    }
  }
  __animatingEls.set(el, requestAnimationFrame(step));
}
function short(addr){ return addr ? addr.slice(0,6)+'…'+addr.slice(-4) : '—'; }
function toast(msg, isErr=false){
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.className = 'toast show' + (isErr?' err':'');
  setTimeout(()=>{ t.className='toast'; }, 5000);
}

// ---- tabs ----
document.querySelectorAll('.tab-btn').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    document.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active'));
    document.querySelectorAll('.view').forEach(v=>v.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById('view-'+btn.dataset.view).classList.add('active');
  });
});

// ---- botones de acceso rápido del Dashboard (Participar / Ver subasta / Entrar a la batalla) ----
document.querySelectorAll('[data-goto]').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    const targetView = btn.dataset.goto;
    const navBtn = document.querySelector(`.tab-btn[data-view="${targetView}"]`);
    if(navBtn) navBtn.click();
  });
});

// ---- render de ganadores de rifa (ronda cerrada) y ranking en vivo de subasta ----
function renderRaffleWinners(winners, prizeAmounts){
  const el = document.getElementById('prizeSplitList');
  if(!winners || winners.length === 0){
    el.innerHTML = `<div class="prize-row"><span class="p">Aún no hay ganadores registrados.</span></div>`;
    return;
  }
  el.innerHTML = winners.map((addr,i)=>
    `<div class="prize-row"><span class="p">${short(addr)}</span><span class="a">${fmt(prizeAmounts[i],5)} BNB · ${(PRIZE_SPLIT_BPS[i]/100).toFixed(2)}%</span></div>`
  ).join('');
}
function renderAuctionRanking(ranking, pot){
  const el = document.getElementById('prizeSplitListAuction');
  if(!ranking || ranking.length === 0){
    el.innerHTML = `<div class="prize-row"><span class="p">Todavía no hay pujas en esta ronda.</span></div>`;
    return;
  }
  el.innerHTML = ranking.map((addr,i)=>{
    const estimated = (pot * BigInt(PRIZE_SPLIT_BPS[i])) / 10000n;
    return `<div class="prize-row"><span class="p">#${i+1} ${short(addr)}</span><span class="a">~${fmt(estimated,5)} BNB · ${(PRIZE_SPLIT_BPS[i]/100).toFixed(2)}%</span></div>`;
  }).join('');
}
document.getElementById('prizeSplitList').innerHTML = `<div class="prize-row"><span class="p">Conecta tu wallet para ver los ganadores.</span></div>`;
document.getElementById('prizeSplitListAuction').innerHTML = `<div class="prize-row"><span class="p">Conecta tu wallet para ver el ranking.</span></div>`;

// ---- connect ----
// ---- deteccion robusta de la wallet inyectada ----
// MetaMask/Trust Wallet inyectan window.ethereum de forma asincrona: si el usuario
// hace clic muy rapido tras cargar la pagina, window.ethereum puede no existir aun
// aunque la extension este instalada y funcionando. Esperamos activamente antes de
// darlo por ausente, y si hay varias wallets instaladas (window.ethereum.providers),
// dejamos que el propio MetaMask arbitre o tomamos la primera disponible.
function waitForEthereum(timeoutMs = 3000){
  return new Promise((resolve)=>{
    if(window.ethereum){ resolve(window.ethereum); return; }
    const onInit = ()=>{ resolve(window.ethereum); };
    window.addEventListener('ethereum#initialized', onInit, { once:true });
    const start = Date.now();
    const poll = setInterval(()=>{
      if(window.ethereum){
        clearInterval(poll);
        window.removeEventListener('ethereum#initialized', onInit);
        resolve(window.ethereum);
      } else if(Date.now() - start > timeoutMs){
        clearInterval(poll);
        window.removeEventListener('ethereum#initialized', onInit);
        resolve(null);
      }
    }, 100);
  });
}
function pickProvider(eth){
  // si hay varias wallets instaladas, window.ethereum.providers las lista;
  // preferimos MetaMask si esta, si no la primera disponible.
  if(eth && Array.isArray(eth.providers) && eth.providers.length){
    return eth.providers.find(p=>p.isMetaMask) || eth.providers[0];
  }
  return eth;
}

// reutilizar la misma imagen del héroe ya incrustada en la escena de batalla,
// para no duplicar el peso del archivo con otra copia del mismo PNG/WebP
// ---- Galería de 24 avatares (8 formas x 3 colores) generados por SVG ----
// Se generan por combinacion en vez de cargar 24 imagenes sueltas: mismo espiritu
// de "galeria fija y segura" que describe el contrato (nunca una URL libre),
// pero sin anadir peso de archivo ni depender de mas assets externos.
const AVATAR_SHAPES = [
  'M12 2 L14 8 L20 9 L15.5 13 L17 20 L12 16.5 L7 20 L8.5 13 L4 9 L10 8 Z',
  'M12 2 L20 7 V13 C20 18 16.5 21 12 22 C7.5 21 4 18 4 13 V7 Z',
  'M5 8 L11 2 L13 4 L7 10 Z M9 6 L18 15 M3 21 L11 21 M7 17 L7 21',
  'M12 3 C9 3 7 6 7 9 C7 13 12 20 12 20 C12 20 17 13 17 9 C17 6 15 3 12 3 Z',
  'M12 3 A9 9 0 1 0 12 21 A7 7 0 1 1 12 3 Z',
  'M12 2 L4 9 L7 21 H17 L20 9 Z M12 2 L12 22 M4 9 L20 9',
  'M4 12 C4 7 8 3 12 3 C16 3 20 7 20 12 C20 15 18 18 12 21 C6 18 4 15 4 12 Z M9 10 L9.2 10 M15 10 L15.2 10',
  'M12 2 C15 2 17 5 17 8 C17 11 15 13 12 13 C9 13 7 11 7 8 C7 5 9 2 12 2 Z M8 13 L6 21 M16 13 L18 21 M12 13 V21'
];
const AVATAR_COLORS = ['#F0B90B', '#E5484D', '#58A6FF'];
function avatarParts(avatarId){
  const id = Number(avatarId) || 0;
  return { shape: AVATAR_SHAPES[id % AVATAR_SHAPES.length], color: AVATAR_COLORS[Math.floor(id / AVATAR_SHAPES.length) % AVATAR_COLORS.length] };
}
function renderAvatarSVG(avatarId, size){
  size = size || 32;
  const { shape, color } = avatarParts(avatarId);
  return `<svg viewBox="0 0 24 24" width="${size}" height="${size}"><circle cx="12" cy="12" r="11" fill="${color}22" stroke="${color}" stroke-width="1.1"/><path d="${shape}" fill="none" stroke="${color}" stroke-width="1.5" stroke-linejoin="round" stroke-linecap="round"/></svg>`;
}
// nivel derivado del XP con la MISMA formula publica que usa el contrato
// (nivel = floor(sqrt(xp/100)) + 1), calculada aqui para no gastar bytecode on-chain
function levelForXP(xp){
  const scaled = Math.floor(Number(xp) / 100);
  return Math.floor(Math.sqrt(scaled)) + 1;
}
function xpRangeForLevel(level){
  const xpStart = (level - 1) * (level - 1) * 100;
  const xpEnd = level * level * 100;
  return { xpStart, xpEnd };
}
const PRESTIGE_NUMERALS = ['I','II','III','IV','V','VI','VII','VIII','IX','X'];
function prestigeForLevel(level){
  return Math.floor((level - 1) / 100);
}
function renderPrestigeBadge(level){
  const p = prestigeForLevel(level);
  if(p <= 0) return '';
  const label = p <= PRESTIGE_NUMERALS.length ? PRESTIGE_NUMERALS[p-1] : p;
  return `<span class="prestige-badge">★ Prestigio ${label}</span>`;
}

document.getElementById('connectBtn').addEventListener('click', async ()=>{
  const rawEth = await waitForEthereum();
  if(!rawEth){ toast('No se detectó una wallet compatible (MetaMask/Trust Wallet). Comprueba que la extensión está instalada y desbloqueada.', true); return; }
  const eth = pickProvider(rawEth);
  const addr = CONTRACT_ADDRESS;
  try{
    provider = new ethers.BrowserProvider(eth);
    await provider.send('eth_requestAccounts', []);
    signer = await provider.getSigner();
    userAddr = await signer.getAddress();
    contract = new ethers.Contract(addr, ABI, signer);
    initActivityFeed();

    const btn = document.getElementById('connectBtn');
    btn.textContent = short(userAddr);
    btn.classList.add('connected');
    document.getElementById('userAddrShort').textContent = short(userAddr);
    toast('Wallet conectada.');

    try{
      loadHistory(addr);
      initChart();
    }catch(chartErr){
      console.warn('No se pudo inicializar el gráfico histórico:', chartErr);
    }

    const savedGoal = loadGoal(userAddr);
    if(savedGoal > 0){ document.getElementById('goalInput').value = savedGoal; }

    refreshAll();
    setInterval(refreshAll, 15000);
    renderXPLeaderboard();
    renderBossLeaderboard();
    setInterval(()=>{ renderXPLeaderboard(); renderBossLeaderboard(); }, 60000);
  }catch(e){ toast('Error al conectar: '+(e.shortMessage||e.message), true); }
});

async function refreshAll(){
  if(!contract) return;
  try{
    const stats = await contract.getProtocolStats();
    animateValue(document.getElementById('st-tvl'), Number(ethers.formatEther(stats.tvl)), 5);
    animateValue(document.getElementById('st-pool'), Number(ethers.formatEther(stats.dividendPoolBalance)), 5);
    document.getElementById('st-rate').textContent = bpsToPct(stats.dailyRateBps);
    document.getElementById('st-users').textContent = stats.usersCount.toString();
    document.getElementById('qs-users').textContent = stats.usersCount.toString();
    document.getElementById('qs-deposits').textContent = stats.totalDepositsCount_.toString();
    document.getElementById('qs-withdrawals').textContent = stats.totalWithdrawalsCount_.toString();
    document.getElementById('qs-claims').textContent = stats.totalClaimsCount_.toString();
    document.getElementById('qs-compounds').textContent = stats.totalCompoundsCount_.toString();
    document.getElementById('st-distributed').textContent = fmt(stats.totalDistributed,5);
    document.getElementById('st-savingsnote').textContent = stats.savingsMode ? 'Modo ahorro activo' : 'Modo normal';

    if(historyChart){
      pushHistoryPoint(stats.tvl, stats.dividendPoolBalance, await contract.getAddress());
    }

    document.getElementById('tk-tvl').textContent = fmt(stats.tvl,5)+' BNB';
    document.getElementById('tk-pool').textContent = fmt(stats.dividendPoolBalance,5)+' BNB';
    document.getElementById('tk-rate').textContent = bpsToPct(stats.dailyRateBps);
    document.getElementById('tk-users').textContent = stats.usersCount.toString();
    document.getElementById('tk-savings').textContent = stats.savingsMode ? 'Sí' : 'No';

    const lastDist = await contract.lastDistributionAt();
    const dayLen = await contract.SECONDS_PER_DAY();
    distributionDeadline = Number(lastDist) + Number(dayLen);

    if(userAddr){
      const u = await contract.getUserStats(userAddr);
      document.getElementById('u-deposit').textContent = fmt(u.depositAmount,5)+' BNB';
      document.getElementById('u-deposit-bank').textContent = fmt(u.depositAmount,5)+' BNB';
      document.getElementById('mc-deposit').textContent = fmt(u.depositAmount,5)+' BNB';

      // ---- perfil, nivel y XP ----
      try{
        const prof = await contract.profiles(userAddr);
        document.getElementById('mc-username').textContent = prof.username && prof.username.length > 0 ? prof.username : 'Jugador sin nombre';
        document.getElementById('miCuentaPortrait').innerHTML = renderAvatarSVG(prof.avatarId, 100);
      }catch(e){
        document.getElementById('mc-username').textContent = 'Jugador sin nombre';
        document.getElementById('miCuentaPortrait').innerHTML = renderAvatarSVG(0, 100);
      }
      const xp = await contract.totalXP(userAddr);
      const xpNum = Number(xp);
      const level = levelForXP(xpNum);
      const { xpStart, xpEnd } = xpRangeForLevel(level);
      document.getElementById('mc-level-badge').textContent = 'Nivel ' + level;
      document.getElementById('mc-prestige-badge').innerHTML = renderPrestigeBadge(level);
      document.getElementById('mc-xp-total').textContent = xpNum.toLocaleString('es-ES');
      const xpIntoLevel = xpNum - xpStart;
      const xpNeeded = xpEnd - xpStart;
      document.getElementById('mc-xp-label').textContent = xpIntoLevel.toLocaleString('es-ES') + ' / ' + xpNeeded.toLocaleString('es-ES') + ' XP';
      document.getElementById('mc-xp-bar').style.width = Math.min(100, (xpIntoLevel/xpNeeded*100)) + '%';
      document.getElementById('u-share').textContent = bpsToPct(u.shareBps);
      document.getElementById('mc-share').textContent = bpsToPct(u.shareBps);
      document.getElementById('u-pending').textContent = fmt(u.pending,5)+' BNB';
      document.getElementById('mc-pending').textContent = fmt(u.pending,5)+' BNB';
      document.getElementById('u-claimed').textContent = fmt(u.lifetimeClaimed,5)+' BNB';
      document.getElementById('u-compounded').textContent = fmt(u.totalCompounded,5)+' BNB';
      document.getElementById('u-withdrawn').textContent = fmt(u.totalWithdrawn,5)+' BNB';
      const roi = Number(u.roiBps)/100;
      const roiEl = document.getElementById('u-roi');
      roiEl.textContent = roi.toFixed(2)+'%';
      roiEl.className = 'v '+(roi>=0?'pos':'neg');
      const mcRoiEl = document.getElementById('mc-roi');
      mcRoiEl.textContent = roi.toFixed(2)+'%';
      mcRoiEl.className = 'mono '+(roi>=0?'pos':'neg');
      document.getElementById('u-recovered').textContent = bpsToPct(u.feesRecoveredBps);
      document.getElementById('mc-recovered').textContent = bpsToPct(u.feesRecoveredBps);
      const recoveredPct = Math.min(100, Number(u.feesRecoveredBps)/100);
      document.getElementById('u-recovered-bar').style.width = recoveredPct + '%';

      // beneficio neto: dividendos cobrados + pendientes, menos comisiones pagadas en depositos (estimacion)
      const feesPaid = (u.totalDeposited * 1000n) / 10000n; // 7%+3% = 10%
      const netProfit = (u.lifetimeClaimed + u.pending) - feesPaid;
      const netEl = document.getElementById('u-netprofit');
      netEl.textContent = (netProfit >= 0n ? '+' : '') + fmt(netProfit < 0n ? -netProfit : netProfit, 5) + (netProfit < 0n ? ' BNB (negativo)' : ' BNB');
      netEl.className = 'v ' + (netProfit >= 0n ? 'pos' : 'neg');

      const walletBal = await provider.getBalance(userAddr);
      document.getElementById('u-walletbalance').textContent = fmt(walletBal,5)+' BNB';

      const netWorth = u.depositAmount + u.pending;
      animateValue(document.getElementById('u-networth'), Number(ethers.formatEther(netWorth)), 5, ' BNB');

      const userInfo = await contract.users(userAddr);
      const firstDepositAt = Number(userInfo.firstDepositAt);
      document.getElementById('u-timeinside').textContent = firstDepositAt > 0 ? fmtDuration(Math.floor(Date.now()/1000) - firstDepositAt) : '—';

      // proyecciones: rendimiento estimado por cada BNB depositado, aplicado al deposito del usuario
      const perBnbFraction = stats.tvl > 0n ? Number(ethers.formatEther(stats.dividendPoolBalance)) * Number(stats.dailyRateBps) / 10000 / Number(ethers.formatEther(stats.tvl)) : 0;
      const userDepositNum = Number(ethers.formatEther(u.depositAmount));
      const dailyEstimate = perBnbFraction * userDepositNum;
      document.getElementById('proj-next').textContent = dailyEstimate.toFixed(5)+' BNB';
      document.getElementById('hero-willget').textContent = dailyEstimate.toFixed(5)+' BNB';
      document.getElementById('proj-daily').textContent = dailyEstimate.toFixed(5)+' BNB';
      document.getElementById('proj-weekly').textContent = (dailyEstimate*7).toFixed(5)+' BNB';
      document.getElementById('proj-monthly').textContent = (dailyEstimate*30).toFixed(5)+' BNB';
      const apr = perBnbFraction * 365 * 100;
      const apy = (Math.pow(1+perBnbFraction, 365) - 1) * 100;
      document.getElementById('proj-apr').textContent = apr.toFixed(2)+'%';
      document.getElementById('proj-apy').textContent = apy.toFixed(2)+'%';
      document.getElementById('proj-rate').textContent = bpsToPct(stats.dailyRateBps);

      window.__perBnbFraction = perBnbFraction; // usado por la calculadora
      updateCalculator();
      updateGoalProgress(userDepositNum);
    }

    const rf = await contract.getRaffleInfo();
    document.getElementById('raffleRoundLbl').textContent = 'Ronda '+rf.roundId.toString();
    document.getElementById('rf-pot').textContent = fmt(rf.pot,5)+' BNB';
    document.getElementById('dash-rf-pot').textContent = fmt(rf.pot,5)+' BNB';
    document.getElementById('rf-entries').textContent = rf.entriesCount.toString();
    document.getElementById('tk-rafflepot').textContent = fmt(rf.pot,5)+' BNB';
    raffleDeadline = Math.floor(Date.now()/1000) + Number(rf.timeRemaining);
    if(userAddr){
      const yourTickets = await contract.raffleTicketsOf(rf.roundId, userAddr);
      document.getElementById('rf-yourtickets').textContent = yourTickets.toString();
    }
    const prevRaffleRound = rf.roundId > 1n ? rf.roundId - 1n : 0n;
    if(userAddr){
      const claimableRaffle = prevRaffleRound > 0n ? await contract.raffleClaimable(prevRaffleRound, userAddr) : 0n;
      document.getElementById('rf-claimable').textContent = fmt(claimableRaffle,5)+' BNB';
    }
    if(prevRaffleRound > 0n){
      const winners = await contract.getRaffleWinners(prevRaffleRound);
      const prizeAmounts = await Promise.all(winners.map(addr => contract.raffleWonAmount(prevRaffleRound, addr)));
      renderRaffleWinners(winners, prizeAmounts);
    } else {
      renderRaffleWinners([], []);
    }

    const au = await contract.getAuctionInfo();
    document.getElementById('auctionRoundLbl').textContent = 'Ronda '+au.roundId.toString();
    document.getElementById('au-pot').textContent = fmt(au.pot,5)+' BNB';
    document.getElementById('dash-au-pot').textContent = fmt(au.currentBid,5)+' BNB';
    document.getElementById('au-bid').textContent = fmt(au.currentBid,5)+' BNB';
    document.getElementById('au-leader').textContent = short(au.leader);
    document.getElementById('au-nextbid').textContent = fmt(au.nextBidRequired,5)+' BNB';
    document.getElementById('tk-auctionbid').textContent = fmt(au.currentBid,5)+' BNB';
    auctionDeadlineTs = Number(au.deadline);

    const ranking = await contract.getAuctionRanking();
    renderAuctionRanking(ranking, au.pot);
    if(userAddr){
      const prevAuctionRound = au.roundId > 1n ? au.roundId - 1n : 0n;
      const claimableAuction = prevAuctionRound > 0n ? await contract.auctionClaimable(prevAuctionRound, userAddr) : 0n;
      document.getElementById('au-claimable').textContent = fmt(claimableAuction,5)+' BNB';
    }

    // ---- Salud del protocolo ----
    document.getElementById('ph-deposits').textContent = stats.totalDepositsCount_.toString();
    document.getElementById('ph-withdrawals').textContent = stats.totalWithdrawalsCount_.toString();
    document.getElementById('ph-claims').textContent = stats.totalClaimsCount_.toString();
    document.getElementById('ph-compounds').textContent = stats.totalCompoundsCount_.toString();
    document.getElementById('ph-mode').textContent = stats.savingsMode ? '🟡 Conservador' : '🟢 Normal';
    document.getElementById('ph-savingsentries').textContent = stats.savingsModeEntries_.toString();
    document.getElementById('ph-nextamount').textContent = fmt(stats.dailyRewardEstimate,5)+' BNB';
    const perBnb = stats.tvl > 0n ? (stats.dividendPoolBalance * stats.dailyRateBps) / 10000n * (10n**18n) / stats.tvl : 0n;
    document.getElementById('ph-perbnb').textContent = fmt(perBnb,5)+' BNB';

    document.getElementById('rec-maxpool').textContent = fmt(stats.maxPoolEver,5)+' BNB';
    document.getElementById('rec-minpool').textContent = fmt(stats.minPoolEver,5)+' BNB';
    document.getElementById('rec-maxdeposit').textContent = fmt(stats.largestDeposit_,5)+' BNB';
    document.getElementById('rec-maxclaim').textContent = fmt(stats.largestClaim_,5)+' BNB';
    document.getElementById('rec-maxcompound').textContent = fmt(stats.largestCompound_,5)+' BNB';

    const inc7 = await contract.getIncomeStats(7);
    const inc30 = await contract.getIncomeStats(30);
    document.getElementById('rec-income7').textContent = fmt(inc7.income,5)+' BNB';
    document.getElementById('rec-income30').textContent = fmt(inc30.income,5)+' BNB';
    const ratioEl = document.getElementById('rec-ratio');
    if(inc30.payout > 0n){
      const ratioPct = (Number(ethers.formatEther(inc30.income)) / Number(ethers.formatEther(inc30.payout))) * 100;
      ratioEl.textContent = ratioPct.toFixed(1)+'%';
      ratioEl.className = 'v ' + (ratioPct >= 100 ? 'pos' : 'neg');
    } else {
      ratioEl.textContent = 'Sin repartos aún';
      ratioEl.className = 'v';
    }

    document.getElementById('sus-pool').textContent = fmt(stats.dividendPoolBalance,5);
    const incomeAvg30 = Number(ethers.formatEther(inc30.income)) / 30;
    const payoutAvg30 = Number(ethers.formatEther(inc30.payout)) / 30;
    document.getElementById('sus-income').textContent = incomeAvg30.toFixed(5)+' BNB/día';
    document.getElementById('sus-payout').textContent = payoutAvg30.toFixed(5)+' BNB/día';
    const headlineEl = document.getElementById('sus-headline');
    const poolNum = Number(ethers.formatEther(stats.dividendPoolBalance));
    if(payoutAvg30 <= 0 || incomeAvg30 >= payoutAvg30){
      headlineEl.textContent = '∞ (los ingresos cubren o superan el reparto)';
    } else {
      const daysLeft = poolNum / (payoutAvg30 - incomeAvg30);
      if(daysLeft > 3650){
        headlineEl.textContent = 'más de 10 años';
      } else if(daysLeft > 60){
        headlineEl.textContent = Math.round(daysLeft/30)+' meses aprox.';
      } else {
        headlineEl.textContent = Math.round(daysLeft)+' días aprox.';
      }
    }

    // ---- Jefe Mundial ----
    const bossInfo = await contract.getBossSeasonInfo();
    document.getElementById('bossSeasonLbl').textContent = 'Temporada '+bossInfo.seasonId.toString();
    document.getElementById('boss-pool').textContent = fmt(bossInfo.prizePool,5)+' BNB';
    document.getElementById('dash-boss-pool').textContent = fmt(bossInfo.prizePool,5)+' BNB';
    document.getElementById('side-pool').textContent = fmt(bossInfo.prizePool,5)+' BNB';
    document.getElementById('boss-players').textContent = bossInfo.participantsCount.toString();
    document.getElementById('side-players').textContent = bossInfo.participantsCount.toString();
    document.getElementById('tk-bosspool').textContent = fmt(bossInfo.prizePool,5)+' BNB';
    bossDeadline = Math.floor(Date.now()/1000) + Number(bossInfo.timeRemaining);

    const entryFee = await contract.bossEntryFee();
    document.getElementById('boss-entryfee').textContent = fmt(entryFee,5)+' BNB';
    document.getElementById('side-entryfee').textContent = fmt(entryFee,5)+' BNB';

    const btnSettle = document.getElementById('btnSettleBoss');
    btnSettle.textContent = bossInfo.settling ? `Asentar jugadores (${bossInfo.settleCursor}/${bossInfo.participantsCount})` : 'Asentar jugadores (tras terminar)';
    btnSettle.disabled = !bossInfo.settling;

    const totalDamageRaw = await contract.bossSeasonTotalDamage();
    let bp = null;
    if(userAddr){
      bp = await contract.getBossPlayerInfo(bossInfo.seasonId, userAddr);
    }
    // el contrato solo "asienta" tu daño cuando haces una transaccion (unirte/mejorar equipo);
    // aqui corregimos el total en vivo sustituyendo tu parte ya asentada por tu daño en vivo real,
    // para que la barra del jefe no vaya por detras de tu propio contador.
    const correctedTotal = (bp && bp.joined) ? (totalDamageRaw - bp.settledDamage + bp.liveDamage) : totalDamageRaw;
    window.__bossTotalDamageLive = correctedTotal;
    updateBossHpBar(correctedTotal);

    if(userAddr){
      const notJoinedEl = document.getElementById('boss-not-joined');
      const joinedInfoEl = document.getElementById('boss-joined-info');
      const btnJoin = document.getElementById('btnJoinBoss');

      if(!bp.joined){
        notJoinedEl.style.display = 'block';
        joinedInfoEl.style.display = 'none';
        btnJoin.style.display = 'block';
        window.__bossFighting = false;
        window.__playerPower = 0;
      } else {
        notJoinedEl.style.display = 'none';
        joinedInfoEl.style.display = 'block';
        btnJoin.style.display = 'none';

        document.getElementById('boss-power').textContent = bp.power.toString();
        document.getElementById('side-power').textContent = bp.power.toString();
        window.__playerPower = bp.power;
        window.__bossFighting = Number(bossInfo.timeRemaining) > 0;
        document.getElementById('boss-mydamage').textContent = bp.liveDamage.toString();
        document.getElementById('side-mydamage').textContent = bp.liveDamage.toString();
        const shareEl = document.getElementById('boss-myshare');
        const sideShareEl = document.getElementById('side-myshare');
        const shareTxt = correctedTotal > 0n ? ((Number(bp.liveDamage) / Number(correctedTotal)) * 100).toFixed(2)+'%' : '0.00%';
        shareEl.textContent = shareTxt;
        sideShareEl.textContent = shareTxt;

        const equipGrid = document.getElementById('boss-equipment-grid');
        equipGrid.innerHTML = '';
        const powerPerLevel = window.__equipPowerPerLevel || (window.__equipPowerPerLevel = Number(await contract.EQUIPMENT_POWER_PER_LEVEL()));
        const maxLevel = window.__maxEquipLevel || (window.__maxEquipLevel = Number(await contract.MAX_EQUIPMENT_LEVEL()));
        for(let slot=0; slot<4; slot++){
          const level = Number(bp.equipLevels[slot]);
          const tier = level >= 40 ? {name:'Diamante', color:'var(--mint)'} :
                       level >= 25 ? {name:'Oro', color:'var(--gold)'} :
                       level >= 10 ? {name:'Plata', color:'#B8C0C8'} :
                       {name:'Bronce', color:'#B08D57'};
          const maxed = level >= maxLevel;
          const nextCost = maxed ? 0n : await contract.getNextEquipmentCost(bossInfo.seasonId, userAddr, slot);
          const progressPct = (level / maxLevel) * 100;
          const div = document.createElement('div');
          div.className = 'equip-slot-card';
          div.innerHTML = `
            ${EQUIP_ICONS[slot]}
            <div style="font-size:12.5px; color:var(--muted); margin-bottom:2px;">${EQUIP_SLOT_LABELS[slot]}</div>
            <div style="font-size:10px; color:${tier.color}; text-transform:uppercase; letter-spacing:.06em; margin-bottom:8px;">${tier.name}</div>
            <div style="font-family:'JetBrains Mono',monospace; font-size:18px; color:var(--gold);">Nivel ${level}</div>
            <div style="font-size:11px; color:var(--muted); margin-bottom:8px;">+${level*powerPerLevel} de Poder</div>
            <div class="equip-progress"><div class="equip-progress-fill" style="width:${progressPct}%; background:${tier.color};"></div></div>
            <button class="btn" ${maxed?'disabled':''} data-slot="${slot}" data-cost="${nextCost.toString()}" style="width:100%; font-size:12px; padding:8px; margin-top:10px;">${maxed ? 'Nivel máximo' : `Mejorar (${fmt(nextCost,5)} BNB)`}</button>
          `;
          equipGrid.appendChild(div);
        }
        equipGrid.querySelectorAll('button[data-slot]:not([disabled])').forEach(btn=>{
          btn.addEventListener('click', ()=>{
            const slot = parseInt(btn.dataset.slot);
            const cost = BigInt(btn.dataset.cost);
            tx(()=>contract.upgradeBossEquipment(slot, {value: cost}), 'Equipo mejorado.');
          });
        });
      }
    }
  }catch(e){
    console.error(e);
    if(!window.__refreshErrorShown){
      window.__refreshErrorShown = true;
      toast('Error actualizando datos: '+(e.shortMessage||e.message), true);
    }
  }
}

// ---- Top 10 de daño de la temporada (calculado en el navegador, sin backend) ----
// Escanea los eventos "se unió a la temporada" para saber qué direcciones participan,
// y luego pregunta al contrato el daño real de cada una. Con pocos jugadores es rápido;
// con cientos o miles de jugadores esto se volvería lento (necesitaría un indexador
// externo tipo TheGraph para ser barato a gran escala).
// ---- Feed de actividad en vivo (eventos reales del contrato, no simulados) ----
function initActivityFeed(){
  if(window.__activityFeedInited) return; // evitar duplicar listeners si se reconecta
  window.__activityFeedInited = true;

  const feedEl = document.getElementById('activity-feed');
  if(!feedEl || !contract) return;
  const MAX_ITEMS = 15;

  function pushActivity(iconClass, html){
    const emptyEl = feedEl.querySelector('.activity-empty');
    if(emptyEl) emptyEl.remove();
    const row = document.createElement('div');
    row.className = 'activity-row';
    const ts = Date.now();
    row.innerHTML = `<div class="activity-icon ${iconClass}">●</div><div class="activity-text">${html}</div><div class="activity-time" data-ts="${ts}">ahora</div>`;
    feedEl.insertBefore(row, feedEl.firstChild);
    while(feedEl.children.length > MAX_ITEMS){
      feedEl.removeChild(feedEl.lastChild);
    }
  }

  try{
    contract.on('Deposit', (user, grossAmount) => {
      pushActivity('deposit', `${short(user)} depositó <b>${fmt(grossAmount,4)} BNB</b>`);
    });
    contract.on('Withdraw', (user, principalAmount) => {
      pushActivity('withdraw', `${short(user)} retiró <b>${fmt(principalAmount,4)} BNB</b>`);
    });
    contract.on('Claim', (user, amount) => {
      pushActivity('claim', `${short(user)} cobró <b>${fmt(amount,4)} BNB</b> en dividendos`);
    });
    contract.on('Compound', (user, grossAmount) => {
      pushActivity('compound', `${short(user)} reinvirtió <b>${fmt(grossAmount,4)} BNB</b>`);
    });
    contract.on('RaffleTicketBought', (roundId, user, tickets) => {
      pushActivity('raffle', `${short(user)} compró ${tickets.toString()} entrada(s) de rifa`);
    });
    contract.on('AuctionBid', (roundId, bidder, amount) => {
      pushActivity('auction', `${short(bidder)} pujó <b>${fmt(amount,4)} BNB</b> en la subasta`);
    });
    contract.on('BossSeasonJoined', (seasonId, player) => {
      pushActivity('boss', `${short(player)} se unió al Jefe Mundial`);
    });
    contract.on('Distribution', (amount) => {
      pushActivity('claim', `Reparto ejecutado: <b>${fmt(amount,4)} BNB</b> repartidos`);
    });
  }catch(e){
    console.warn('No se pudieron registrar los listeners de actividad en vivo:', e);
  }

  setInterval(()=>{
    feedEl.querySelectorAll('.activity-time').forEach(el=>{
      const ts = Number(el.dataset.ts);
      const secs = Math.floor((Date.now()-ts)/1000);
      el.textContent = secs < 5 ? 'ahora' : (secs < 60 ? `hace ${secs}s` : `hace ${Math.floor(secs/60)}m`);
    });
  }, 1000);
}

async function renderXPLeaderboard(){
  const listEl = document.getElementById('xp-leaderboard-list');
  if(!listEl || !contract) return;
  try{
    const [addrs, xps] = await contract.getXPLeaderboard();
    const rows = [];
    for(let i=0;i<addrs.length;i++){
      if(addrs[i] === ethers.ZeroAddress) continue;
      rows.push({ addr: addrs[i], score: xps[i] });
    }
    if(rows.length === 0){
      listEl.innerHTML = '<div class="top10-empty">Todavía nadie ha reclamado su puesto en el ranking.</div>';
      return;
    }
    const withProfiles = await Promise.all(rows.map(async r => {
      let username = '', avatarId = 0;
      try{ const p = await contract.profiles(r.addr); username = p.username; avatarId = Number(p.avatarId); }catch(e){}
      return { ...r, username, avatarId };
    }));
    listEl.innerHTML = withProfiles.map((row, i) => {
      const isYou = userAddr && row.addr.toLowerCase() === userAddr.toLowerCase();
      const displayName = row.username && row.username.length > 0 ? `<span class="rank-name">${row.username}</span>${short(row.addr)}` : short(row.addr);
      return `<div class="top10-row${isYou ? ' is-you' : ''}">
        <div class="top10-rank">${i+1}</div>
        <div class="rank-avatar">${renderAvatarSVG(row.avatarId, 26)}</div>
        <div class="top10-addr">${displayName}${isYou ? '<span class="top10-you-tag">TÚ</span>' : ''} · Nivel ${levelForXP(Number(row.score))} ${renderPrestigeBadge(levelForXP(Number(row.score)))}</div>
        <div class="top10-dmg" style="color:var(--gold);">${Number(row.score).toLocaleString('es-ES')} XP</div>
      </div>`;
    }).join('');
  }catch(e){
    console.error('Error cargando el ranking de XP:', e);
    listEl.innerHTML = '<div class="top10-empty">No se pudo cargar el ranking ahora mismo.</div>';
  }
}

async function renderBossLeaderboard(){
  const listEl = document.getElementById('boss-leaderboard-list');
  if(!listEl || !contract) return;
  try{
    const seasonId = (await contract.getBossSeasonInfo()).seasonId;
    const [addrs, damages] = await contract.getBossLeaderboard(seasonId);
    const rows = [];
    for(let i=0;i<addrs.length;i++){
      if(addrs[i] === ethers.ZeroAddress) continue;
      rows.push({ addr: addrs[i], score: damages[i] });
    }
    if(rows.length === 0){
      listEl.innerHTML = '<div class="top10-empty">Todavía nadie ha hecho daño asentado esta temporada.</div>';
      return;
    }
    const withProfiles = await Promise.all(rows.map(async r => {
      let username = '', avatarId = 0;
      try{ const p = await contract.profiles(r.addr); username = p.username; avatarId = Number(p.avatarId); }catch(e){}
      return { ...r, username, avatarId };
    }));
    listEl.innerHTML = withProfiles.map((row, i) => {
      const isYou = userAddr && row.addr.toLowerCase() === userAddr.toLowerCase();
      const displayName = row.username && row.username.length > 0 ? `<span class="rank-name">${row.username}</span>${short(row.addr)}` : short(row.addr);
      return `<div class="top10-row${isYou ? ' is-you' : ''}">
        <div class="top10-rank">${i+1}</div>
        <div class="rank-avatar">${renderAvatarSVG(row.avatarId, 26)}</div>
        <div class="top10-addr">${displayName}${isYou ? '<span class="top10-you-tag">TÚ</span>' : ''}</div>
        <div class="top10-dmg">${Number(row.score).toLocaleString('es-ES')}</div>
      </div>`;
    }).join('');
  }catch(e){
    console.error('Error cargando el ranking de daño del jefe:', e);
    listEl.innerHTML = '<div class="top10-empty">No se pudo cargar el ranking ahora mismo.</div>';
  }
}


// ---- countdown rings ----
const CIRC = 264;
function updateRing(elId, secondsLeft, totalSeconds){
  const el = document.getElementById(elId);
  const frac = totalSeconds>0 ? Math.max(0, Math.min(1, secondsLeft/totalSeconds)) : 0;
  el.setAttribute('stroke-dashoffset', (CIRC*(1-frac)).toString());
}
function fmtTime(sec){
  if(sec<=0) return '00:00';
  const h = Math.floor(sec/3600), m = Math.floor((sec%3600)/60), s = Math.floor(sec%60);
  return h>0 ? `${h}h ${m}m` : `${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
}
function fmtDuration(sec){
  const days = Math.floor(sec / 86400);
  if(days >= 1) return days + (days === 1 ? ' día' : ' días');
  const hours = Math.floor(sec / 3600);
  if(hours >= 1) return hours + (hours === 1 ? ' hora' : ' horas');
  const mins = Math.floor(sec / 60);
  return mins + (mins === 1 ? ' minuto' : ' minutos');
}

// ---- oleadas: umbrales deterministas de daño, iguales para cualquiera que cargue la pagina ----
const WAVE_BASE = 3000;
const WAVE_GROWTH = 1.55;
function getWaveInfo(totalDamageNum){
  let waveSize = WAVE_BASE;
  let cumFloor = 0;
  let wave = 1;
  while(totalDamageNum >= cumFloor + waveSize){
    cumFloor += waveSize;
    waveSize = Math.round(waveSize * WAVE_GROWTH);
    wave += 1;
  }
  const progress = Math.min(100, ((totalDamageNum - cumFloor) / waveSize) * 100);
  return { wave, progress, floor: cumFloor, ceil: cumFloor + waveSize };
}

function waveTop3Key(){ return 'bnbBank_waveTop3_' + CONTRACT_ADDRESS.toLowerCase(); }
function loadWaveTop3(){
  try{ return JSON.parse(localStorage.getItem(waveTop3Key())) || []; }catch(e){ return []; }
}
function saveWaveTop3(list){
  try{ localStorage.setItem(waveTop3Key(), JSON.stringify(list)); }catch(e){ /* no disponible */ }
}
function registerWave(wave){
  let list = loadWaveTop3();
  if(!list.includes(wave)){
    list.push(wave);
    list.sort((a,b)=>b-a);
    list = list.slice(0,3);
    saveWaveTop3(list);
  }
  const recordEl = document.getElementById('side-wave-record');
  if(recordEl){
    const best = list.length ? Math.max(...list, wave) : wave;
    recordEl.textContent = 'Oleada ' + best;
  }
}
(function initWaveRecord(){
  const list = loadWaveTop3();
  const recordEl = document.getElementById('side-wave-record');
  if(recordEl && list.length){
    recordEl.textContent = 'Oleada ' + Math.max(...list);
  }
})();

// ---- barra de vida decorativa del jefe (referencial: no afecta al reparto de premios) ----
function updateBossHpBar(totalDamageBig){
  const fillEl = document.getElementById('bossHpFill');
  const labelEl = document.getElementById('bossHpLabel');
  const waveEl = document.getElementById('waveNumber');
  if(!fillEl) return;
  const totalDamageNum = Number(totalDamageBig);
  const info = getWaveInfo(totalDamageNum);
  fillEl.style.width = info.progress.toFixed(1)+'%';
  labelEl.textContent = totalDamageNum.toLocaleString('es-ES');
  if(waveEl) waveEl.textContent = info.wave.toString();
  registerWave(info.wave);
}

// ---- animacion de combate: golpes periodicos reflejando el daño real acumulado ----
const BOSS_TICK_SECONDS = 2.5;
// ---- brasas flotantes de fondo (puramente decorativas) ----
function spawnEmber(){
  const container = document.getElementById('embersContainer');
  if(!container) return;
  const el = document.createElement('div');
  el.className = 'ember';
  const startLeft = 5 + Math.random()*90;
  const duration = 4 + Math.random()*3;
  const drift = (Math.random()*40 - 20) + 'px';
  el.style.left = startLeft + '%';
  el.style.bottom = '10px';
  el.style.setProperty('--drift', drift);
  el.style.animationDuration = duration + 's';
  container.appendChild(el);
  setTimeout(()=>{ el.remove(); }, duration*1000 + 100);
}
setInterval(spawnEmber, 550);
for(let i=0;i<6;i++){ setTimeout(spawnEmber, i*300); }

function spawnDamageNumber(amount){
  const container = document.getElementById('damageNumbers');
  if(!container) return;
  const left = 68 + (Math.random()*8-4);
  const top = 28 + (Math.random()*10-5);

  const el = document.createElement('div');
  el.className = 'dmg-number';
  el.textContent = '+'+amount.toLocaleString('es-ES');
  el.style.left = left + '%';
  el.style.top = top + '%';
  container.appendChild(el);
  setTimeout(()=>{ el.remove(); }, 1300);

  const burst = document.createElement('img');
  burst.className = 'impact-burst-img';
  burst.src = IMPACT_GOLD_URL;
  burst.style.left = left + '%';
  burst.style.top = top + '%';
  container.appendChild(burst);
  setTimeout(()=>{ burst.remove(); }, 500);
}
setInterval(()=>{
  if(!window.__bossFighting || !window.__playerPower) return;
  const power = Number(window.__playerPower);
  if(power <= 0) return;
  const dmg = Math.round(power * BOSS_TICK_SECONDS);

  const heroEl = document.getElementById('heroGroup');
  const bossEl = document.getElementById('bossGroup');
  if(heroEl){ heroEl.classList.remove('hero-attack'); void heroEl.offsetWidth; heroEl.classList.add('hero-attack'); }
  if(bossEl){ bossEl.classList.remove('boss-hit'); void bossEl.offsetWidth; bossEl.classList.add('boss-hit'); }
  spawnDamageNumber(dmg);

  if(window.__bossTotalDamageLive !== undefined){
    window.__bossTotalDamageLive = window.__bossTotalDamageLive + BigInt(dmg);
    updateBossHpBar(window.__bossTotalDamageLive);
  }
}, BOSS_TICK_SECONDS * 1000);

setInterval(()=>{
  const now = Math.floor(Date.now()/1000);
  const rfLeft = raffleDeadline - now;
  document.getElementById('raffleTimeLeft').textContent = fmtTime(rfLeft);
  updateRing('raffleRingFg', rfLeft, 86400);
  const dashRfTimeEl = document.getElementById('dash-rf-time');
  if(dashRfTimeEl) dashRfTimeEl.textContent = fmtTime(rfLeft);

  const auLeft = auctionDeadlineTs - now;
  document.getElementById('auctionTimeLeft').textContent = fmtTime(auLeft);
  updateRing('auctionRingFg', auLeft, 1800);
  const dashAuTimeEl = document.getElementById('dash-au-time');
  if(dashAuTimeEl) dashAuTimeEl.textContent = fmtTime(auLeft);

  const distLeft = distributionDeadline - now;
  const distEl = document.getElementById('st-nextdistribution');
  if(contract){
    distEl.textContent = distLeft > 0 ? fmtTime(distLeft) : 'Disponible ahora';
    distEl.classList.toggle('mint', distLeft <= 0);
  }
  const heroNextEl = document.getElementById('hero-nextin');
  if(heroNextEl && contract){
    heroNextEl.textContent = distLeft > 0 ? fmtTime(distLeft) : 'Disponible ahora';
  }
  const heroRingEl = document.getElementById('heroRingFg');
  if(heroRingEl){
    const BIG_CIRC = 490; // 2 * PI * 78
    const fracHero = Math.max(0, Math.min(1, distLeft/86400));
    heroRingEl.setAttribute('stroke-dashoffset', (BIG_CIRC*(1-fracHero)).toString());
  }

  const bossLeft = bossDeadline - now;
  const bossTimeEl = document.getElementById('bossTimeLeft');
  if(bossTimeEl){
    bossTimeEl.textContent = bossLeft > 0 ? fmtTime(bossLeft) : 'Terminada';
    updateRing('bossRingFg', bossLeft, 7*86400);
  }
  const dashBossTimeEl = document.getElementById('dash-boss-time');
  if(dashBossTimeEl) dashBossTimeEl.textContent = bossLeft > 0 ? fmtTime(bossLeft) : 'Terminada';
}, 1000);

// ---- actions ----
async function tx(promiseFn, successMsg){
  if(!contract){ toast('Conecta tu wallet primero.', true); return; }
  try{
    const t = await promiseFn();
    toast('Transacción enviada, esperando confirmación…');
    await t.wait();
    toast(successMsg);
    refreshAll();
  }catch(e){ toast('Error: '+(e.shortMessage||e.reason||e.message), true); }
}

document.getElementById('btnDeposit').addEventListener('click', ()=>{
  const amt = document.getElementById('amountInput').value;
  if(!amt || parseFloat(amt)<=0){ toast('Introduce una cantidad válida.', true); return; }
  if(parseFloat(amt) < 0.001){ toast('El depósito mínimo es 0.001 BNB.', true); return; }
  tx(()=>contract.deposit({value: ethers.parseEther(amt)}), 'Depósito confirmado.');
});
document.getElementById('btnWithdraw').addEventListener('click', ()=>{
  const amt = document.getElementById('amountInput').value;
  if(!amt || parseFloat(amt)<=0){ toast('Introduce una cantidad válida.', true); return; }
  tx(()=>contract.withdraw(ethers.parseEther(amt)), 'Retiro confirmado.');
});
document.getElementById('btnClaim').addEventListener('click', ()=>{
  tx(()=>contract.claim(), 'Dividendos reclamados.');
});
document.getElementById('btnCompound').addEventListener('click', ()=>{
  tx(()=>contract.compound(), 'Compound ejecutado.');
});
document.getElementById('btnDistribute').addEventListener('click', ()=>{
  tx(()=>contract.distribute(), 'Reparto de dividendos ejecutado.');
});

// ---- Editor de perfil (nombre + avatar) ----
let selectedAvatarId = 0;
(function initAvatarPicker(){
  const picker = document.getElementById('avatarPicker');
  if(!picker) return;
  let html = '';
  for(let i=0; i<24; i++){
    html += `<div class="avatar-swatch" data-avatar-id="${i}">${renderAvatarSVG(i, 28)}</div>`;
  }
  picker.innerHTML = html;
  picker.querySelectorAll('.avatar-swatch').forEach(el=>{
    el.addEventListener('click', ()=>{
      picker.querySelectorAll('.avatar-swatch').forEach(s=>s.classList.remove('selected'));
      el.classList.add('selected');
      selectedAvatarId = Number(el.dataset.avatarId);
    });
  });
})();

document.getElementById('btnEditProfile').addEventListener('click', async ()=>{
  const panel = document.getElementById('profileEditPanel');
  const isHidden = panel.style.display === 'none';
  panel.style.display = isHidden ? 'block' : 'none';
  if(isHidden && contract && userAddr){
    try{
      const prof = await contract.profiles(userAddr);
      document.getElementById('profileNameInput').value = prof.username || '';
      selectedAvatarId = Number(prof.avatarId) || 0;
      const picker = document.getElementById('avatarPicker');
      picker.querySelectorAll('.avatar-swatch').forEach(s=>{
        s.classList.toggle('selected', Number(s.dataset.avatarId) === selectedAvatarId);
      });
    }catch(e){ /* sin perfil todavia, se queda en los valores por defecto */ }
  }
});
document.getElementById('btnCancelProfile').addEventListener('click', ()=>{
  document.getElementById('profileEditPanel').style.display = 'none';
});
document.getElementById('btnSaveProfile').addEventListener('click', ()=>{
  const name = document.getElementById('profileNameInput').value.trim();
  if(!name || name.length > 20){ toast('El nombre debe tener entre 1 y 20 caracteres.', true); return; }
  tx(()=>contract.setProfile(name, selectedAvatarId), 'Perfil actualizado.');
  document.getElementById('profileEditPanel').style.display = 'none';
});

document.getElementById('btnClaimRank').addEventListener('click', async ()=>{
  if(!contract || !userAddr){ toast('Conecta tu wallet primero.', true); return; }
  try{
    const t = await contract.claimLeaderboardSpot(userAddr);
    toast('Transacción enviada, esperando confirmación…');
    await t.wait();
    toast('Tu posición en el ranking se ha actualizado.');
    renderXPLeaderboard();
  }catch(e){
    toast('Tu XP actual no alcanza para entrar en el Top 50 todavía.', true);
  }
});

document.getElementById('btnBuyTickets').addEventListener('click', async ()=>{
  const n = parseInt(document.getElementById('raffleTicketsInput').value || '1');
  if(!contract) { toast('Conecta tu wallet primero.', true); return; }
  try{
    const price = await contract.ticketPrice();
    tx(()=>contract.buyRaffleTickets(n, {value: price * BigInt(n)}), 'Tickets comprados.');
  }catch(e){ toast('Error: '+(e.shortMessage||e.message), true); }
});
document.getElementById('btnCloseRaffle').addEventListener('click', ()=>{
  tx(()=>contract.closeRaffleRound(), 'Ronda de rifa cerrada.');
});
document.getElementById('btnClaimRaffle').addEventListener('click', async ()=>{
  if(!contract) { toast('Conecta tu wallet primero.', true); return; }
  const rf = await contract.getRaffleInfo();
  const prevRound = rf.roundId > 1n ? rf.roundId - 1n : 1n;
  tx(()=>contract.claimRafflePrize(prevRound), 'Premio de rifa reclamado (si tenías uno pendiente).');
});

document.getElementById('btnBid').addEventListener('click', async ()=>{
  if(!contract) { toast('Conecta tu wallet primero.', true); return; }
  const au = await contract.getAuctionInfo();
  tx(()=>contract.placeBid({value: au.nextBidRequired}), 'Puja realizada.');
});
document.getElementById('btnCloseAuction').addEventListener('click', ()=>{
  tx(()=>contract.closeAuctionRound(), 'Ronda de subasta cerrada.');
});
document.getElementById('btnClaimAuction').addEventListener('click', async ()=>{
  if(!contract) { toast('Conecta tu wallet primero.', true); return; }
  const au = await contract.getAuctionInfo();
  const prevRound = au.roundId > 1n ? au.roundId - 1n : 1n;
  tx(()=>contract.claimAuctionPrize(prevRound), 'Premio de subasta reclamado (si tenías uno pendiente).');
});

document.getElementById('btnJoinBoss').addEventListener('click', async ()=>{
  if(!contract) { toast('Conecta tu wallet primero.', true); return; }
  const fee = await contract.bossEntryFee();
  tx(()=>contract.joinBossSeason({value: fee}), 'Te has unido a la temporada.');
});
document.getElementById('btnSettleBoss').addEventListener('click', ()=>{
  tx(()=>contract.settleBossBatch(50), 'Jugadores asentados.');
});
document.getElementById('btnClaimBoss').addEventListener('click', async ()=>{
  if(!contract) { toast('Conecta tu wallet primero.', true); return; }
  const bossInfo = await contract.getBossSeasonInfo();
  const prevSeason = bossInfo.seasonId > 1n ? bossInfo.seasonId - 1n : 1n;
  tx(()=>contract.claimBossPrize(prevSeason), 'Premio del Jefe Mundial reclamado (si tenías uno pendiente).');
});
