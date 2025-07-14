"""add extended user fields

Revision ID: 20250714_001726
Revises: 
Create Date: 2025-07-14 00:17:26

"""

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '20250714_001726'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    op.add_column('users', sa.Column('health', sa.String()))
    op.add_column('users', sa.Column('memory', sa.String()))
    op.add_column('users', sa.Column('profile_state', sa.String()))


def downgrade():
    op.drop_column('users', 'health')
    op.drop_column('users', 'memory')
    op.drop_column('users', 'profile_state')
