use soroban_sdk::{Address, Env, String, Symbol};

/// Emitted when a new grant is created.
pub fn grant_created(
    env: &Env,
    grant_id: u32,
    creator: &Address,
    title: String,
    goal: i128,
    deadline: u64,
) {
    env.events().publish(
        (Symbol::new(env, "grant"), Symbol::new(env, "created")),
        (grant_id, creator, title, goal, deadline),
    );
}

/// Emitted when a grant is funded.
pub fn grant_funded(
    env: &Env,
    grant_id: u32,
    donor: &Address,
    amount: i128,
    total_raised: i128,
) {
    env.events().publish(
        (Symbol::new(env, "funding"), Symbol::new(env, "made")),
        (grant_id, donor, amount, total_raised),
    );
}

/// Emitted when a grant creator withdraws/claims funds.
pub fn funds_claimed(
    env: &Env,
    grant_id: u32,
    creator: &Address,
    amount: i128,
) {
    env.events().publish(
        (Symbol::new(env, "funds"), Symbol::new(env, "claimed")),
        (grant_id, creator, amount),
    );
}

/// Emitted when a funder/applicant is refunded.
pub fn refund_issued(
    env: &Env,
    grant_id: u32,
    donor: &Address,
    amount: i128,
) {
    env.events().publish(
        (Symbol::new(env, "refund"), Symbol::new(env, "issued")),
        (grant_id, donor, amount),
    );
}
