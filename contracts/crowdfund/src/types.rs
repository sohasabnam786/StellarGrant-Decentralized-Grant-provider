use soroban_sdk::{contracttype, Address, String};

// ──────────────────────────────────────────────────────────────────────────────
// Storage Keys
// ──────────────────────────────────────────────────────────────────────────────

#[contracttype]
#[derive(Clone, Debug, PartialEq)]
pub enum DataKey {
    Admin,
    GrantCount,
    Grant(u32),
    Applications(u32),
    RewardToken,
}

// ──────────────────────────────────────────────────────────────────────────────
// Grant Status
// ──────────────────────────────────────────────────────────────────────────────

#[contracttype]
#[derive(Clone, Debug, PartialEq)]
pub enum GrantStatus {
    Active,
    Successful,
    Expired,
    Withdrawn,
}

// ──────────────────────────────────────────────────────────────────────────────
// Grant Program
// ──────────────────────────────────────────────────────────────────────────────

#[contracttype]
#[derive(Clone, Debug)]
pub struct Grant {
    /// Unique grant ID (auto-incremented).
    pub id: u32,
    /// Address of the grant creator (organization).
    pub creator: Address,
    /// Grant title.
    pub title: String,
    /// Grant description.
    pub description: String,
    /// Funding goal/pool in stroops (1 XLM = 10_000_000 stroops).
    pub goal: i128,
    /// Unix timestamp (seconds) after which the grant program closes/expires.
    pub deadline: u64,
    /// Total amount funded/distributed so far, in stroops.
    pub raised: i128,
    /// Current status of the grant.
    pub status: GrantStatus,
}

// ──────────────────────────────────────────────────────────────────────────────
// Application / Contribution
// ──────────────────────────────────────────────────────────────────────────────

#[contracttype]
#[derive(Clone, Debug)]
pub struct Application {
    /// Address of the donor/applicant.
    pub donor: Address,
    /// Amount funded/contributed in stroops.
    pub amount: i128,
    /// Ledger timestamp when the contribution was made.
    pub timestamp: u64,
}
