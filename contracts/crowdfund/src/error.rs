use soroban_sdk::{contracterror};

#[contracterror]
#[derive(Clone, Debug, PartialEq)]
pub enum GrantError {
    AlreadyInitialized = 1,
    NotInitialized = 2,
    Unauthorized = 3,
    GrantNotFound = 4,
    GrantNotActive = 5,
    GrantExpired = 6,
    GrantNotSuccessful = 7,
    GrantNotExpired = 8,
    InvalidGoal = 9,
    InvalidDeadline = 10,
    InvalidAmount = 11,
    NothingToWithdraw = 12,
    NoDonationFound = 13,
    TransferFailed = 14,
}
